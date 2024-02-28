
import React, { useRef, useState } from 'react'
import { useAnimations, useGLTF, Html } from '@react-three/drei'
import {  selectPath } from '../../../Common/Utils/Utils'
import '../../Styles/GameScene.scss'
import { SCENE_LIGHT_INTENSITY, REDUCE_SCALE_DOOR} from '../Modifiers'
export function Workshop(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(`${selectPath()}/rooms/Workshop.glb`) as any;
  const { actions } = useAnimations(animations, group)
  return (
    <group {...props} dispose={null}>
      <group position={[1.87, 0.51, -5.12]} rotation={[-Math.PI / 2, 0, 0.8]} scale={0.09}>
        <group position={[-7.92, 9.8, 16.2]} rotation={[1.46, 0.3, 0.03]} scale={[4.75, 7.7, 4.75]}>
          <mesh geometry={nodes['Material_003-material'].geometry} material={materials['Material.003']} />
          <mesh geometry={nodes['Material_006-material'].geometry} material={materials['Material.006']} />
          <mesh geometry={nodes['Material_009-material'].geometry} material={materials['Material.009']} />
        </group>
        <group position={[7.86, -6.07, 14.64]} rotation={[-1.51, -0.37, 0.67]} scale={4.2}>
          <mesh geometry={nodes['Material_008-material'].geometry} material={materials['Material.008']} />
          <mesh geometry={nodes['Material_008-material001'].geometry} material={materials['Material.008']} />
        </group>
        <group position={[-5.12, 11.26, 26.57]} rotation={[-0.12, -0.11, 0.24]} scale={[2.99, 10.08, 5.75]}>
          <mesh geometry={nodes['Material_009-material001'].geometry} material={materials['Material.009']} />
          <mesh geometry={nodes['Material_009-material002'].geometry} material={materials['Material.009']} />
          <mesh geometry={nodes['Material_009-material003'].geometry} material={materials['Material.009']} />
          <mesh geometry={nodes['Material_009-material004'].geometry} material={materials['Material.009']} />
          <mesh geometry={nodes['Material_009-material005'].geometry} material={materials['Material.009']} />
          <mesh geometry={nodes['Material_009-material006'].geometry} material={materials['Material.009']} />
        </group>
        <mesh geometry={nodes['Material_006-material001'].geometry} material={materials['Material.006']} position={[8.31, -5.89, 4.56]} scale={1.37} />
        <mesh geometry={nodes['Material_007-material005'].geometry} material={materials['Material.007']} position={[-7.96, 9.94, 23.93]} rotation={[-0.1, -0.03, 0.3]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material006'].geometry} material={materials['Material.007']} position={[-7.36, 8.02, 8.22]} rotation={[-0.1, -0.03, 0.3]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material'].geometry} material={materials['Material.007']} position={[-12.09, 7.81, 10.08]} rotation={[1.46, 0.3, -0.05]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material001'].geometry} material={materials['Material.007']} position={[-3.36, 10.57, 10.08]} rotation={[1.46, 0.3, 0.12]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material002'].geometry} material={materials['Material.007']} position={[-7.91, 9.76, 15.77]} rotation={[1.46, 0.3, 0.03]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material003'].geometry} material={materials['Material.007']} position={[-7.99, 9.89, 17.59]} rotation={[1.46, 0.3, -1.54]} scale={[1.14, 0.46, 0.77]} />
        <mesh geometry={nodes['Material_007-material004'].geometry} material={materials['Material.007']} position={[-7.63, 8.75, 6.3]} rotation={[1.46, 0.3, -1.54]} scale={[1.14, 0.53, 0.77]} />
        <mesh geometry={nodes['Material_007-material007'].geometry} material={materials['Material.007']} position={[-8.87, 12.88, 9.93]} rotation={[1.83, 0.3, -0.08]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material008'].geometry} material={materials['Material.007']} position={[-8.72, 10.3, 18.33]} rotation={[-1.58, 1.26, -2.1]} scale={[0.48, 0.1, 0.89]} />
        <mesh geometry={nodes['Material_007-material009'].geometry} material={materials['Material.007']} position={[-7.74, 10.61, 18.33]} rotation={[-1.58, 1.26, -2.1]} scale={[0.48, 0.1, 0.89]} />
        <mesh geometry={nodes['Material_010-material'].geometry} material={materials['Material.010']} position={[-12.21, 7.43, 8.13]} rotation={[-0.1, -0.03, 0.3]} scale={0.21} />
        <mesh geometry={nodes['Material_010-material001'].geometry} material={materials['Material.010']} position={[-3.04, 10.33, 8.13]} rotation={[-0.1, -0.03, 0.3]} scale={0.21} />
        <mesh geometry={nodes['Material_010-material002'].geometry} material={materials['Material.010']} position={[-8.13, 10.46, 23.86]} rotation={[-0.1, -0.03, 0.3]} scale={0.21} />
        <mesh geometry={nodes['Material_010-material003'].geometry} material={materials['Material.010']} position={[-7.66, 10.95, 18.14]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
        <mesh geometry={nodes['Material_010-material004'].geometry} material={materials['Material.010']} position={[-8.77, 10.59, 18.14]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
        <mesh geometry={nodes['Material_010-material005'].geometry} material={materials['Material.010']} position={[-7.38, 10.08, 18.67]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
        <mesh geometry={nodes['Material_010-material006'].geometry} material={materials['Material.010']} position={[-8.5, 9.74, 18.69]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
      </group>
      <group position={[1.5, 0.51, -1.37]} rotation={[-Math.PI, 0.66, -Math.PI]} scale={0.06}>
        <group scale={25}>
          <mesh geometry={nodes.Mesh1_Color_H07_0.geometry} material={materials.Color_H07} />
          <mesh geometry={nodes.Mesh11_Color_I04_0.geometry} material={materials.Color_I04} />
          <mesh geometry={nodes.Mesh12_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh13_baked_FrontColor_0.geometry} material={materials.baked_FrontColor} />
          <mesh geometry={nodes.Mesh14_Color_F08_0.geometry} material={materials.Color_F08} />
          <mesh geometry={nodes.Mesh16_Color_I07_0.geometry} material={materials.Color_I07} />
          <mesh geometry={nodes.Mesh17_FrontColor_0.geometry} material={materials.FrontColor} />
          <mesh geometry={nodes.Mesh18_Color_F08_0.geometry} material={materials.Color_F08} />
          <mesh geometry={nodes.Mesh19_Color_I04_0.geometry} material={materials.Color_I04} />
          <mesh geometry={nodes.Mesh20_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh21_Color_F08_0.geometry} material={materials.Color_F08} />
          <mesh geometry={nodes.Mesh2_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh22_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh23_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh24_Color_A06_0.geometry} material={materials.Color_A06} />
          <mesh geometry={nodes.Mesh24_FrontColor_0.geometry} material={materials.FrontColor} />
          <mesh geometry={nodes.Mesh25_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh26_Color_B04_0.geometry} material={materials.Color_B04} />
          <mesh geometry={nodes.Mesh27_Color_H07_0.geometry} material={materials.Color_H07} />
          <mesh geometry={nodes.Mesh28_Color_I07_0.geometry} material={materials.Color_I07} />
          <mesh geometry={nodes.Mesh29_Color_H07_0.geometry} material={materials.Color_H07} />
          <mesh geometry={nodes.Mesh3_Color_H07_0.geometry} material={materials.Color_H07} />
          <mesh geometry={nodes.Mesh30_Color_H07_0.geometry} material={materials.Color_H07} />
          <mesh geometry={nodes.Mesh31_Color_F03_0.geometry} material={materials.Color_F03} />
          <mesh geometry={nodes.Mesh32_Color_F08_0.geometry} material={materials.Color_F08} />
          <mesh geometry={nodes.Mesh34_Color_I07_0.geometry} material={materials.Color_I07} />
          <mesh geometry={nodes.Mesh35_Color_H07_0.geometry} material={materials.Color_H07} />
          <mesh geometry={nodes.Mesh36_Color_I07_0.geometry} material={materials.Color_I07} />
          <mesh geometry={nodes.Mesh37_Color_B08_0.geometry} material={materials.Color_B08} />
          <mesh geometry={nodes.Mesh38_Color_J02_0.geometry} material={materials.Color_J02} />
          <mesh geometry={nodes.Mesh39_Color_A06_0.geometry} material={materials.Color_A06} />
          <mesh geometry={nodes.Mesh40_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh5_Color_F03_0.geometry} material={materials.Color_F03} />
          <mesh geometry={nodes.Mesh41_Color_B08_0.geometry} material={materials.Color_B08} />
          <mesh geometry={nodes.Mesh42_Color_B08_0.geometry} material={materials.Color_B08} />
          <mesh geometry={nodes.Mesh43_Color_I07_0.geometry} material={materials.Color_I07} />
          <mesh geometry={nodes.Mesh44_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh45_Color_B08_0.geometry} material={materials.Color_B08} />
          <mesh geometry={nodes.Mesh46_Color_B08_0.geometry} material={materials.Color_B08} />
          <mesh geometry={nodes.Mesh47_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh6_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh48_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh49_Color_B08_0.geometry} material={materials.Color_B08} />
          <mesh geometry={nodes.Mesh50_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh51_Color_A06_0.geometry} material={materials.Color_A06} />
          <mesh geometry={nodes.Mesh52_Color_B04_0.geometry} material={materials.Color_B04} />
          <mesh geometry={nodes.Mesh53_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh55_baked_FrontColor_0.geometry} material={materials.baked_FrontColor} />
          <mesh geometry={nodes.Mesh7_Color_F03_0.geometry} material={materials.Color_F03} />
          <mesh geometry={nodes.Mesh8_Color_F03_0.geometry} material={materials.Color_F03} />
          <mesh geometry={nodes.Mesh9_Color_I07_0.geometry} material={materials.Color_I07} />
          <mesh geometry={nodes.Mesh10_Color_J04_0.geometry} material={materials.Color_J04} />
          <mesh geometry={nodes.Mesh56_FrontColor2_0.geometry} material={materials.FrontColor2} />
          <mesh geometry={nodes.Mesh57_FrontColor2_0.geometry} material={materials.FrontColor2} />
          <mesh geometry={nodes.Mesh4_FrontColor1_0.geometry} material={materials.FrontColor1} />
          <mesh geometry={nodes.Mesh15_FrontColor1_0.geometry} material={materials.FrontColor1} />
          <mesh geometry={nodes.Mesh33_FrontColor1_0.geometry} material={materials.FrontColor1} />
          <mesh geometry={nodes.Mesh54_FrontColor1_0.geometry} material={materials.FrontColor1} />
          <mesh geometry={nodes.Mesh58_QFT_COLOR_QUAD_0.geometry} material={materials.QFT_COLOR_QUAD} />
          <mesh geometry={nodes.Mesh58_QFT_COLOR_TRI_0.geometry} material={materials.QFT_COLOR_TRI} />
        </group>
      </group>
      <group position={[1.9, 0.51, -2.09]} rotation={[-Math.PI / 2, 0, -2.59]} scale={[0.21, 0.23, 0.28]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <mesh geometry={nodes.Cube__0.geometry} material={materials['Scene_-_Root']} position={[0, 102.98, 0]} />
          <mesh geometry={nodes.Cube_1__0.geometry} material={materials['Scene_-_Root']} position={[0, 403.94, 0]} />
          <mesh geometry={nodes.Cube_1_3__0.geometry} material={materials['Scene_-_Root']} position={[175.04, 366.08, 0]} rotation={[0, Math.PI / 2, 0]} />
          <group position={[0, 144.4, 358.35]}>
            <group position={[0, -144.4, -358.35]}>
              <group position={[-174.26, 373.77, 358.35]} rotation={[0, 0, Math.PI]}>
                <mesh geometry={nodes.Cube_2__0.geometry} material={materials['Scene_-_Root']} />
                <mesh geometry={nodes.Cube_2__0001.geometry} material={materials['Scene_-_Root']} />
                <mesh geometry={nodes.Cube_2__0002.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <mesh geometry={nodes.Cube_1_2__0.geometry} material={materials['Scene_-_Root']} position={[0, 221.68, 0]} />
            <mesh geometry={nodes.Cube_2_2__0.geometry} material={materials['Scene_-_Root']} position={[0, -41.04, 0]} />
          </group>
        </group>
      </group>
      <group position={[1.92, 1.21, -2.13]} rotation={[0, -0.88, 0]} scale={0.13}>
        <group position={[-1.33, 2.9, 3.87]} rotation={[-1.02, 0.2, 0.8]} scale={0.55}>
          <mesh geometry={nodes.QuilFeather_Combined_QuilFinalOpacity_Textures_0.geometry} material={materials.QuilFinalOpacity_Textures} position={[-3.1, 6.99, -1.08]} rotation={[-0.66, -0.13, -0.35]} />
        </group>
      </group>
      <group position={[8.9, 0.51, -4.46]} rotation={[-Math.PI / 2, 0, -1.57]} scale={0.01 * REDUCE_SCALE_DOOR}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube001__0.geometry} material={materials['Cube.000__0']} position={[0, 0.07, -0.02]} scale={[1, 0.92, 1]} />
          </group>
        </group>
      </group>
      <group position={[6.46, 0.51, -6.9]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01 * REDUCE_SCALE_DOOR}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube001__0001.geometry} material={materials['Cube.000__0.001']} position={[0, 0.07, 0]} scale={[1, 0.71, 1]} />
          </group>
        </group>
      </group>
      <group position={[9.19, 2.77, -3.46]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial002.geometry} material={materials['Material.025']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[9.18, 2.78, -5.44]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial001.geometry} material={materials['Material.023']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[7.46, 2.77, -7.18]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial003.geometry} material={materials['Material.027']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[5.48, 2.78, -7.18]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
        <group position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['Material.026']} position={[-0.07, 0, 0]} />
        </group>
        <group position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
          <pointLight intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <mesh geometry={nodes.Cuadro.geometry} material={materials['Material.018']} position={[0.07, 0.81, -3.18]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[1.89, 0.05, 0.03]} />
      <mesh geometry={nodes.Marco.geometry} material={materials.cornicione} position={[0.07, 0.81, -3.18]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[1.91, 0.05, 0.03]} />
      <group position={[4.35, 0.53, -3.37]} rotation={[0, -Math.PI / 2, 0]} scale={[3.5, 1, 4.5]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Floor.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials.OutsideWall} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials.MiddleWall} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials.Wall_brick} />
        <mesh geometry={nodes.Plane001_5.geometry} material={materials.Floor} />
      </group>
    </group>
  )
}

useGLTF.preload(`${selectPath()}/rooms/Workshop.glb`)
