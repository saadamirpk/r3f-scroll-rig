import { useEffect, RefObject, useMemo } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { Texture, CanvasTexture, ImageBitmapLoader, TextureLoader } from 'three'
import { suspend } from 'suspend-react'

/**
 *  Create Threejs Texture from DOM image tag
 *
 *  - Supports <picture> and `srcset` - uses `currentSrc` to get the responsive image source
 *
 *  - Supports lazy-loading image - suspends until first load event. Warning: the GPU upload can cause jank
 *
 *  - Relies on browser cache to avoid loading image twice. We let the <img> tag load the image and suspend until it's ready.
 *
 *  - NOTE: You must add the `crossOrigin` attribute
 *     <img src="" alt="" crossOrigin="anonymous"/>
 */

// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
// expensive work of uploading a texture to the GPU off the main thread.
// Copied from: github.com/mrdoob/three.js/blob/master/examples/jsm/loaders/GLTFLoader.js#L2424
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true
const isFirefox = navigator.userAgent.indexOf('Firefox') > -1
// @ts-ignore
const firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1
const useTextureLoader = typeof createImageBitmap === 'undefined' || isSafari || (isFirefox && firefoxVersion < 98)

function useImageAsTexture(
  imgRef: RefObject<HTMLImageElement>,
  { initTexture = true, premultiplyAlpha = 'default' } = {}
) {
  const { gl } = useThree()
  const { size } = useThree()

  const currentSrc = suspend(() => {
    return new Promise((resolve) => {
      const el = imgRef.current

      // respond to all future load events (resizing might load another image)
      el?.addEventListener('load', () => resolve(el?.currentSrc), { once: true })

      // detect if loaded from browser cache
      if (el?.complete) {
        resolve(el?.currentSrc)
      }
    })
  }, [imgRef, size]) as string

  const LoaderProto = useTextureLoader ? TextureLoader : ImageBitmapLoader
  // @ts-ignore
  const result: any = useLoader(LoaderProto, currentSrc, (loader) => {
    if (loader instanceof ImageBitmapLoader) {
      loader.setOptions({
        colorSpaceConversion: 'none',
        premultiplyAlpha, // "none" increases blocking time in lighthouse
        imageOrientation: 'flipY',
      })
    }
  })

  const texture = useMemo(() => {
    if (result instanceof Texture) {
      return result
    }
    if (result instanceof ImageBitmap) {
      return new CanvasTexture(result)
    }
  }, [result]) as Texture

  // https://github.com/mrdoob/three.js/issues/22696
  // Upload the texture to the GPU immediately instead of waiting for the first render
  useEffect(
    function uploadTextureToGPU() {
      initTexture && gl.initTexture(texture)
    },
    [gl, texture, initTexture]
  )

  return texture
}

export { useImageAsTexture }
export default useImageAsTexture