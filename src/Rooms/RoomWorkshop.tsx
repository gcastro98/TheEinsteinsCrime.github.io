import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RoomWorkshop(props: any) {
  const { nodes, materials } = useGLTF('./TheEinsteinsCrime/models/rooms/Room_workshop.glb') as any;
  return (
    <group {...props} dispose={null}>
      <group position={[11.17, 0.51, -7.59]} rotation={[-Math.PI / 2, 0, -2.34]} scale={0.09}>
        <group position={[8.01, 11.31, 10.98]} rotation={[0, -0.51, 0]}>
          <mesh geometry={nodes['Material_011-material'].geometry} material={materials['Material.011']} />
          <mesh geometry={nodes['Material_012-material'].geometry} material={materials['Material.012']} />
        </group>
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
        <mesh geometry={nodes['Material_006-material002'].geometry} material={materials['Material.006']} position={[7.73, 11.22, 10.6]} scale={0.76} />
        <mesh geometry={nodes['Material_007-material005'].geometry} material={materials['Material.007']} position={[-7.96, 9.94, 23.93]} rotation={[-0.1, -0.03, 0.3]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material006'].geometry} material={materials['Material.007']} position={[-7.36, 8.02, 8.22]} rotation={[-0.1, -0.03, 0.3]} scale={1.14} />
        <mesh geometry={nodes['Material_004-material'].geometry} material={materials['Material.004']} position={[7.51, 5.9, 9.54]} rotation={[0, 0, -0.6]} />
        <mesh geometry={nodes['Material_007-material'].geometry} material={materials['Material.007']} position={[-12.09, 7.81, 10.08]} rotation={[1.46, 0.3, -0.05]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material001'].geometry} material={materials['Material.007']} position={[-3.36, 10.57, 10.08]} rotation={[1.46, 0.3, 0.12]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material002'].geometry} material={materials['Material.007']} position={[-7.91, 9.76, 15.77]} rotation={[1.46, 0.3, 0.03]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material003'].geometry} material={materials['Material.007']} position={[-7.99, 9.89, 17.59]} rotation={[1.46, 0.3, -1.54]} scale={[1.14, 0.46, 0.77]} />
        <mesh geometry={nodes['Material_007-material004'].geometry} material={materials['Material.007']} position={[-7.63, 8.75, 6.3]} rotation={[1.46, 0.3, -1.54]} scale={[1.14, 0.53, 0.77]} />
        <mesh geometry={nodes['Material_007-material007'].geometry} material={materials['Material.007']} position={[-8.87, 12.88, 9.93]} rotation={[1.83, 0.3, -0.08]} scale={1.14} />
        <mesh geometry={nodes['Material_007-material008'].geometry} material={materials['Material.007']} position={[-8.72, 10.3, 18.33]} rotation={[-1.58, 1.26, -2.1]} scale={[0.48, 0.1, 0.89]} />
        <mesh geometry={nodes['Material_007-material009'].geometry} material={materials['Material.007']} position={[-7.74, 10.61, 18.33]} rotation={[-1.58, 1.26, -2.1]} scale={[0.48, 0.1, 0.89]} />
        <mesh geometry={nodes['Material_001-material'].geometry} material={materials['Material.001']} position={[5.89, 6.62, 16.42]} rotation={[0.48, 0.49, -0.45]} scale={3.03} />
        <mesh geometry={nodes['Material_002-material'].geometry} material={materials['Material.002']} position={[11, 5.91, 18.95]} rotation={[0.57, -1.24, 1.5]} scale={[1.68, 2.36, 1.68]} />
        <mesh geometry={nodes['Material_010-material'].geometry} material={materials['Material.010']} position={[-12.21, 7.43, 8.13]} rotation={[-0.1, -0.03, 0.3]} scale={0.21} />
        <mesh geometry={nodes['Material_010-material001'].geometry} material={materials['Material.010']} position={[-3.04, 10.33, 8.13]} rotation={[-0.1, -0.03, 0.3]} scale={0.21} />
        <mesh geometry={nodes['Material_010-material002'].geometry} material={materials['Material.010']} position={[-8.13, 10.46, 23.86]} rotation={[-0.1, -0.03, 0.3]} scale={0.21} />
        <mesh geometry={nodes['Material_010-material003'].geometry} material={materials['Material.010']} position={[-7.66, 10.95, 18.14]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
        <mesh geometry={nodes['Material_010-material004'].geometry} material={materials['Material.010']} position={[-8.77, 10.59, 18.14]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
        <mesh geometry={nodes['Material_010-material005'].geometry} material={materials['Material.010']} position={[-7.38, 10.08, 18.67]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
        <mesh geometry={nodes['Material_010-material006'].geometry} material={materials['Material.010']} position={[-8.5, 9.74, 18.69]} rotation={[-0.1, -0.03, 0.3]} scale={0.13} />
      </group>
      <group position={[11.55, 0.51, -11.34]} rotation={[0, -0.66, 0]} scale={0.06}>
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
      <group position={[11.14, 0.51, -10.62]} rotation={[-Math.PI / 2, 0, 0.55]} scale={[0.21, 0.23, 0.28]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
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
      <group position={[11.12, 1.21, -10.58]} rotation={[-Math.PI, 0.88, -Math.PI]} scale={0.13}>
        <group position={[-1.33, 2.9, 3.87]} rotation={[-1.02, 0.2, 0.8]} scale={0.55}>
          <mesh geometry={nodes.QuilFeather_Combined_QuilFinalOpacity_Textures_0.geometry} material={materials.QuilFinalOpacity_Textures} position={[-3.1, 6.99, -1.08]} rotation={[-0.66, -0.13, -0.35]} />
        </group>
        <mesh geometry={nodes.Poly_CandleHolder1_CandleAndHolder_FinalProjectTextures_0.geometry} material={materials.CandleAndHolder_FinalProjectTextures} position={[-0.1, 3.48, 1.71]} rotation={[-0.02, 0, 0.01]} scale={0.67} />
        <mesh geometry={nodes.Poly_Scroll_Scroll_Textures_0.geometry} material={materials.Scroll_Textures} position={[0.02, 3.68, -1.05]} rotation={[1.57, 0.01, 0.15]} />
      </group>
      <group position={[10.81, 1.74, -11.35]} rotation={[-1.55, -0.51, -1.52]} scale={0}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['������010_Cryptex_0'].geometry} material={materials.Cryptex} rotation={[Math.PI, 0, 0]} scale={100} />
        </group>
      </group>
      <group position={[2.89, 1.34, 2.16]} rotation={[-Math.PI, 0, -Math.PI]} scale={0}>
        <mesh geometry={nodes.Torus000_0.geometry} material={materials['Torus.008_0']} position={[-1151.98, 139.92, 3576.58]} />
      </group>
      <group position={[5.7, 2.39, -5.52]} scale={[0.22, 0.11, 0.11]}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[7.47, 2.39, -5.53]} scale={0.11}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[3.89, 2.37, -9.21]} rotation={[Math.PI, -1.54, Math.PI]} scale={0.11}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[3.84, 2.37, -7.43]} rotation={[Math.PI, -1.54, Math.PI]} scale={0.11}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.04, 0.51, -8.32]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.37}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} scale={[1, 1, 0.87]} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.005']} position={[0, 0.02, 0]} scale={[1, 0.69, 0.87]} />
      </group>
      <group position={[6.26, 2.26, -5.61]} rotation={[-Math.PI / 2, 0, -3.12]} scale={0.21}>
        <group position={[2.7, 0.15, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['Material.020']} position={[-0.07, 0, 0]} />
        </group>
      </group>
      <mesh geometry={nodes.Cube022_0.geometry} material={materials['Material.018']} position={[12.97, 0.81, -9.53]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.89, 0.05, 0.03]} />
      <mesh geometry={nodes.Cube037_0.geometry} material={materials.cornicione} position={[12.97, 0.81, -9.53]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.91, 0.05, 0.03]} />
      <mesh geometry={nodes.Object_2001.geometry} material={materials['None.001']} position={[6.52, 0.52, -5.76]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.33, 0.29, 0.32]} />
      <mesh geometry={nodes.Object_3001.geometry} material={materials['Material.019']} position={[6.52, 0.52, -5.78]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.33, 0.16, 0.32]} />
      <mesh geometry={nodes.defaultMaterial001.geometry} material={materials['Material.021']} position={[3.89, 2.27, -9.22]} rotation={[-Math.PI, 1.55, -Math.PI]} scale={0.2} />
      <mesh geometry={nodes.defaultMaterial002.geometry} material={materials['Material.022']} position={[3.9, 2.3, -7.43]} rotation={[0, 1.56, 0]} scale={0.2} />
      <mesh geometry={nodes.defaultMaterial004.geometry} material={materials['Material.024']} position={[7.47, 2.27, -5.57]} rotation={[Math.PI, -0.02, Math.PI]} scale={0.2} />
      <group position={[8.53, 0.51, -9.27]} scale={[4.41, 0.56, 3.43]}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Floor} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials.Wall_brick} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials.Marmol} />
      </group>
      <mesh geometry={nodes.Cube_0.geometry} material={materials.struttura} position={[6.35, 1.99, -10.53]} rotation={[-0.3, 0, -3.14]} scale={0.01} />
      <mesh geometry={nodes.Cube004_0.geometry} material={materials.struttura} position={[5.97, 1.78, -10.5]} rotation={[0.01, -1.27, 2.91]} scale={0.01} />
      <mesh geometry={nodes.Cube003_0.geometry} material={materials['Material.014']} position={[5.97, 1.78, -10.5]} rotation={[0.01, -1.27, 2.91]} scale={0.01} />
      <mesh geometry={nodes.Cube005_0.geometry} material={materials.struttura} position={[6.86, 1.8, -11.5]} rotation={[-0.29, 0, -3.14]} scale={0.02} />
      <mesh geometry={nodes.Cube006_0.geometry} material={materials['Torus.008_0']} position={[6.95, 1.7, -11.05]} rotation={[-0.04, 0, -3.14]} scale={0.02} />
      <mesh geometry={nodes.Cube007_0.geometry} material={materials['Material.015']} position={[6.96, 1.7, -10.98]} rotation={[-0.04, 0, -3.14]} scale={[0.23, 0.02, 0.38]} />
      <mesh geometry={nodes.Cube008_0.geometry} material={materials['Torus.008_0']} position={[6.93, 1.71, -10.59]} rotation={[-0.04, 0, -3.14]} scale={0} />
      <mesh geometry={nodes.Cube009_0.geometry} material={materials['Material.017']} position={[6.97, 1.12, -10.96]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.35, 0.35, 0.5]} />
      <mesh geometry={nodes.Cube010_0.geometry} material={materials.MARMO} position={[6.97, 1.12, -10.96]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.35, 0.35, 0.5]} />
      <mesh geometry={nodes.Cube011_0.geometry} material={materials.material} position={[6.97, 1.12, -10.96]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.35, 0.35, 0.5]} />
      <mesh geometry={nodes.Cube015_0.geometry} material={materials['Material.016']} position={[6.87, 1.73, -10.62]} rotation={[-Math.PI / 2, 0, -3.14]} scale={0.01} />
      <mesh geometry={nodes.Cube016_0.geometry} material={materials.MANICO} position={[6.56, 1.74, -10.52]} rotation={[-2.13, 0, -1.57]} scale={0} />
      <mesh geometry={nodes.Cube017_0.geometry} material={materials.MANICO} position={[7.21, 1.69, -11.32]} rotation={[-Math.PI / 2, 0, -1.7]} scale={[0, 0.04, 0.01]} />
      <mesh geometry={nodes.Cube018_0.geometry} material={materials.CORDA} position={[7.2, 1.69, -10.59]} rotation={[-Math.PI / 2, 0, -1.7]} scale={0} />
      <mesh geometry={nodes.Cube021_0.geometry} material={materials.MARMO} position={[6.97, 1.12, -10.96]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.35, 0.35, 0.5]} />
      <mesh geometry={nodes.Cube023_0.geometry} material={materials['Material.014']} position={[6.86, 1.8, -11.5]} rotation={[-0.29, 0, -3.14]} scale={0.02} />
      <mesh geometry={nodes.Cube024_0.geometry} material={materials['Material.014']} position={[6.86, 1.8, -11.5]} rotation={[-0.29, 0, -3.14]} scale={0.02} />
      <mesh geometry={nodes.Cube040_0.geometry} material={materials.cornicione} position={[6.97, 1.12, -10.96]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.35, 0.35, 0.5]} />
      <mesh geometry={nodes.Cylinder_0.geometry} material={materials.struttura} position={[7, 1.71, -10.59]} rotation={[0, -1.57, -1.57]} scale={[0.02, 0.02, 0.17]} />
      <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.struttura} position={[7.05, 1.85, -10.62]} rotation={[0, -1.57, -1.57]} scale={[0.01, 0.01, 0.09]} />
      <mesh geometry={nodes.Cylinder002_0.geometry} material={materials.CORDA} position={[6.34, 1.92, -10.52]} rotation={[-1.57, -0.64, -3.14]} scale={0} />
      <mesh geometry={nodes.Torus001_0.geometry} material={materials['Torus.008_0']} position={[6.94, 1.72, -10.6]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
      <mesh geometry={nodes.Torus002_0.geometry} material={materials['Torus.008_0']} position={[6.94, 1.94, -10.51]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
      <mesh geometry={nodes.Torus008_0.geometry} material={materials['Torus.008_0']} position={[6.95, 1.94, -10.51]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
      <mesh geometry={nodes.Torus014_0.geometry} material={materials['Material.013']} position={[6.68, 1.92, -10.54]} rotation={[0.32, -0.22, 2.79]} scale={0.01} />
    </group>
  )
}

// useGLTF.preload('/models/rooms/Room_workshop.glb')
