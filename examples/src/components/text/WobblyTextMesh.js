import React from 'react'
import { useScrollRig } from '@14islands/r3f-scroll-rig'
import { useFrame, useResource } from 'react-three-fiber'
import { MeshWobbleMaterial } from '@react-three/drei'

import WebGLText from '../stdlib/WebGLText'

const WobblyTextMesh = ({ children, scrollState, scale, el, font }) => {
  const material = useResource()
  const { invalidate } = useScrollRig()

  useFrame(() => {
    if (material.current && scrollState.inViewport) {
      invalidate()
      material.current.factor = scrollState.progress * 0.5 //Math.max(0, scrollState.progress - 0.5) * 2
    }
  })

  return (
    <>
      <MeshWobbleMaterial ref={material} factor={0} depthTest={false} />
      <WebGLText el={el} font={font} material={material.current} scale={scale} overrideEmissive>
        {children}
      </WebGLText>
    </>
  )
}

export default WobblyTextMesh
