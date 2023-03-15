/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 car.gltf --transform
Author: Pooya_dh (https://sketchfab.com/Pooya_dh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toyota-supra-mk4-supra-1997-18e530a1f4e04b4bbc5f51a09e2f95e2
Title: Toyota Supra MK4 | supra 1997
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const startWheels = useRef();
  const endWheels = useRef();
  const { nodes, materials } = useGLTF('/car-transformed.glb')
  useEffect(() => {
    // {b: 1, g: 1, r: 1, isColor: true}
    startWheels.current.children.forEach(item => item.material.scale = {x: 1.5, y: 1.5, z: 1.5})
    console.log(startWheels.current)
    console.log(endWheels.current)
  }, [])
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.45}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_6.geometry}  material={materials.Grille} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.Skirt_Chassis} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Engine} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.Orange_Light} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.Skirt_Chassis} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Paint} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_31.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Object_33.geometry} material={materials.Base} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Object_38.geometry} material={materials.Base} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_41.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.Dookgt} />
            <mesh geometry={nodes.Object_44.geometry} material={materials.Interior_2} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_47.geometry} material={materials.Exhaust} />
            <mesh geometry={nodes.Object_49.geometry} material={materials.Base} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_52.geometry} material={materials.Paint} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Grille} />
            <mesh geometry={nodes.Object_56.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_58.geometry} material={materials.orange} />
            <mesh geometry={nodes.Object_59.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_60.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.Badge} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_65.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Object_67.geometry} material={materials.Base} />
          </group>
          <mesh geometry={nodes.Object_70.geometry} material={materials['null']} rotation={[Math.PI / 2, 0, 0]} />
          <group position={[0, 2.1, 1.75]} rotation={[1.29, 0, 0]}>
            <mesh geometry={nodes.Object_73.geometry} material={materials.Paint} rotation={[0.28, 0, 0]} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_76.geometry} material={materials.Paint} />
            <mesh geometry={nodes.Object_78.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_80.geometry} material={materials.Rubber} />
            <mesh geometry={nodes.Object_82.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_84.geometry} material={materials.Interior_2} />
            <mesh geometry={nodes.Object_85.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_87.geometry} material={materials.Trunk} />
            <mesh geometry={nodes.Object_89.geometry} material={materials.Chrome} />
          </group>
          <group position={[2.28, 1.38, 1.79]} rotation={[Math.PI / 2, 0, 0.28]}>
            <mesh geometry={nodes.Object_92.geometry} material={materials.Paint} rotation={[0, 0, -0.28]} />
            <mesh geometry={nodes.Object_94.geometry} material={materials['Material.008']} rotation={[0, 0, -0.28]} />
            <mesh geometry={nodes.Object_96.geometry} material={materials['Dar_2.1']} rotation={[0, 0, -0.28]} />
            <mesh geometry={nodes.Object_98.geometry} material={materials.Chrome} rotation={[0, 0, -0.28]} />
            <mesh geometry={nodes.Object_100.geometry} material={materials.Glass} rotation={[0, 0, -0.28]} />
            <mesh geometry={nodes.Object_102.geometry} material={materials['null']} rotation={[0, 0, -0.28]} />
            <mesh geometry={nodes.Object_104.geometry} material={materials.Base} rotation={[0, 0, -0.28]} />
          </group>
          <mesh geometry={nodes.Object_107.geometry} material={materials.Brake_Caliper} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_110.geometry} material={materials.Skirt_Chassis} rotation={[Math.PI / 2, 0, 0]} />
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_113.geometry} material={materials.Light_Chrome} />
            <mesh geometry={nodes.Object_115.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Object_117.geometry} material={materials.Bright_White_Light} />
          </group>
          <group ref={startWheels} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_120.geometry} material={materials.Aluminium} />
            <mesh geometry={nodes.Object_122.geometry} material={materials.Rubber} />
          </group>
          <mesh geometry={nodes.Object_125.geometry} material={materials.Brake_Caliper} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_128.geometry} material={materials.Skirt_Chassis} rotation={[Math.PI / 2, 0, 0]} />
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0.01]}>
              <mesh geometry={nodes.Object_139.geometry} material={materials.Material} />
              <mesh geometry={nodes.Object_140.geometry} material={materials['Material.004']} />
            </group>
            <group position={[0, 2.68, 0.01]} rotation={[0, 0, Math.PI]}>
              <mesh geometry={nodes.Object_142.geometry} material={materials.Material} />
              <mesh geometry={nodes.Object_143.geometry} material={materials['Material.004']} />
            </group>
            <mesh geometry={nodes.Object_131.geometry} material={materials.Orange_Light} position={[0, -0.01, 0]} />
            <mesh geometry={nodes.Object_133.geometry} material={materials.Light_Chrome} position={[0, -0.01, 0]} />
            <mesh geometry={nodes.Object_135.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Object_137.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_145.geometry} material={materials.Bright_Red_Light} />
            <mesh geometry={nodes.Object_146.geometry} material={materials['Material.002']} />
          </group>
          <group ref={endWheels} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_149.geometry} material={materials.Aluminium} />
            <mesh geometry={nodes.Object_151.geometry} material={materials.Rubber} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_154.geometry} material={materials.Paint} />
            <mesh geometry={nodes.Object_156.geometry} material={materials.Grille} />
          </group>
          <mesh geometry={nodes.Object_159.geometry} material={materials.Paint} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_162.geometry} material={materials['null']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_165.geometry} material={materials.Brake_Caliper} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_168.geometry} material={materials.Skirt_Chassis} rotation={[Math.PI / 2, 0, 0]} />
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_171.geometry} material={materials.Light_Chrome} />
            <mesh geometry={nodes.Object_173.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Object_175.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_177.geometry} material={materials.Base} position={[2.74, 0, 0]} />
            <mesh geometry={nodes.Object_179.geometry} material={materials.Bright_White_Light} />
          </group>
          <group position={[-2.28, 1.38, 1.79]} rotation={[Math.PI / 2, 0, -0.28]}>
            <mesh geometry={nodes.Object_182.geometry} material={materials.Paint} rotation={[0, 0, 0.28]} />
            <mesh geometry={nodes.Object_184.geometry} material={materials.Chrome} rotation={[0, 0, 0.28]} />
            <mesh geometry={nodes.Object_186.geometry} material={materials.Glass} rotation={[0, 0, 0.28]} />
            <mesh geometry={nodes.Object_188.geometry} material={materials['null']} rotation={[0, 0, 0.28]} />
            <mesh geometry={nodes.Object_190.geometry} material={materials.Base} rotation={[0, 0, 0.28]} />
            <mesh geometry={nodes.Object_192.geometry} material={materials['Dar_2.1']} rotation={[0, 0, 0.28]} />
          </group>
          <mesh geometry={nodes.Object_195.geometry} material={materials.Brake_Caliper} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_198.geometry} material={materials.Skirt_Chassis} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_201.geometry} material={materials.Grille} rotation={[Math.PI / 2, 0, 0]} />
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_204.geometry} material={materials.Farman} />
            <mesh geometry={nodes.Object_205.geometry} material={materials['Material.008']} />
          </group>
          <group position={[0, 2.98, -1.91]} rotation={[1.76, 0, 0]}>
            <group rotation={[-0.19, 0, 0]}>
              <mesh geometry={nodes.Object_222.geometry} material={materials.Trunk_Stoplight} />
              <mesh geometry={nodes.Object_223.geometry} material={materials.Base} />
            </group>
            <mesh geometry={nodes.Object_208.geometry} material={materials.Glass} rotation={[-0.19, 0, 0]} />
            <mesh geometry={nodes.Object_210.geometry} material={materials.Base} rotation={[-0.19, 0, 0]} />
            <mesh geometry={nodes.Object_212.geometry} material={materials.Paint} rotation={[-0.19, 0, 0]} />
            <mesh geometry={nodes.Object_214.geometry} material={materials.Base} rotation={[-0.19, 0, 0]} />
            <mesh geometry={nodes.Object_216.geometry} material={materials.Badge} rotation={[-0.19, 0, 0]} />
            <mesh geometry={nodes.Object_218.geometry} material={materials.Rubber} rotation={[-0.19, 0, 0]} />
            <mesh geometry={nodes.Object_220.geometry} material={materials.Interior} rotation={[-0.19, 0, 0]} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_227.geometry} material={materials.Metal} />
            <mesh geometry={nodes.Object_228.geometry} material={materials.Rpm_kilometer} />
            <mesh geometry={nodes.Object_229.geometry} material={materials.Rpm_kilometer} />
            <mesh geometry={nodes.Object_230.geometry} material={materials.Rpm_kilometer} />
            <mesh geometry={nodes.Object_231.geometry} material={materials.Base} />
            <mesh geometry={nodes.Object_232.geometry} material={materials.glass} />
            <mesh geometry={nodes.Object_233.geometry} material={materials.Narengi} />
            <mesh geometry={nodes.Object_235.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_236.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_237.geometry} material={materials['null']} />
            <mesh geometry={nodes.Object_238.geometry} material={materials.Up_Cooler} />
            <mesh geometry={nodes.Object_239.geometry} material={materials.Black} />
            <mesh geometry={nodes.Object_240.geometry} material={materials.Radio} />
            <mesh geometry={nodes.Object_241.geometry} material={materials.Cooler} />
            <mesh geometry={nodes.Object_242.geometry} material={materials.dariche_cooler} />
            <mesh geometry={nodes.Object_243.geometry} material={materials.Pedal} />
            <mesh geometry={nodes.Object_244.geometry} material={materials.Kafpoosh} />
            <mesh geometry={nodes.Object_245.geometry} material={materials.Parchii} />
            <mesh geometry={nodes.Object_247.geometry} material={materials['Material.008']} />
          </group>
          <mesh geometry={nodes.Object_249.geometry} material={materials.material_0} position={[0, 0, 2.95]} />
          <mesh geometry={nodes.Object_251.geometry} material={materials.material_0} position={[0, 0, 3.05]} scale={0.85} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/car-transformed.glb')
