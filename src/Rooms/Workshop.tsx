import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { REDUCE_SCALE_DOOR, selectPath } from '../Utils/Utils';

export function Workshop(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(`${selectPath()}/rooms/Workshop.glb`) as any;
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Class">
        <group name="Sketchfab_model" position={[20.87, 0.51, -1.86]} rotation={[-Math.PI / 2, 0, 2.38]} scale={0.09}>
          <group name="Collada_visual_scene_group">
            <group name="Circle" scale={21.16} />
            <group name="Circle001" position={[8.31, -5.89, 4.56]} scale={1.37}>
              <mesh name="Material_006-material001" geometry={nodes['Material_006-material001'].geometry} material={materials['Material.006']} />
            </group>
            <group name="Circle002" position={[7.73, 11.22, 10.6]} scale={0.76}>
              <mesh name="Material_006-material002" geometry={nodes['Material_006-material002'].geometry} material={materials['Material.006']} />
            </group>
            <group name="Circle003" position={[8.01, 11.31, 10.98]} rotation={[0, -0.51, 0]}>
              <mesh name="Material_011-material" geometry={nodes['Material_011-material'].geometry} material={materials['Material.011']} />
              <mesh name="Material_012-material" geometry={nodes['Material_012-material'].geometry} material={materials['Material.012']} />
            </group>
            <group name="Cube001" position={[-7.96, 9.94, 23.93]} rotation={[-0.1, -0.03, 0.3]} scale={1.14}>
              <mesh name="Material_007-material005" geometry={nodes['Material_007-material005'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Cube002" position={[-7.36, 8.02, 8.22]} rotation={[-0.1, -0.03, 0.3]} scale={1.14}>
              <mesh name="Material_007-material006" geometry={nodes['Material_007-material006'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Cube003" position={[7.51, 5.9, 9.54]} rotation={[0, 0, -0.6]}>
              <mesh name="Material_004-material" geometry={nodes['Material_004-material'].geometry} material={materials['Material.004']} />
            </group>
            <group name="Plane" position={[-12.09, 7.81, 10.08]} rotation={[1.46, 0.3, -0.05]} scale={1.14}>
              <mesh name="Material_007-material" geometry={nodes['Material_007-material'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane001" position={[-3.36, 10.57, 10.08]} rotation={[1.46, 0.3, 0.12]} scale={1.14}>
              <mesh name="Material_007-material001" geometry={nodes['Material_007-material001'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane002" position={[-7.91, 9.76, 15.77]} rotation={[1.46, 0.3, 0.03]} scale={1.14}>
              <mesh name="Material_007-material002" geometry={nodes['Material_007-material002'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane003" position={[-7.99, 9.89, 17.59]} rotation={[1.46, 0.3, -1.54]} scale={[1.14, 0.46, 0.77]}>
              <mesh name="Material_007-material003" geometry={nodes['Material_007-material003'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane004" position={[-7.63, 8.75, 6.3]} rotation={[1.46, 0.3, -1.54]} scale={[1.14, 0.53, 0.77]}>
              <mesh name="Material_007-material004" geometry={nodes['Material_007-material004'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane005" position={[-7.92, 9.8, 16.2]} rotation={[1.46, 0.3, 0.03]} scale={[4.75, 7.7, 4.75]}>
              <mesh name="Material_003-material" geometry={nodes['Material_003-material'].geometry} material={materials['Material.003']} />
              <mesh name="Material_006-material" geometry={nodes['Material_006-material'].geometry} material={materials['Material.006']} />
              <mesh name="Material_009-material" geometry={nodes['Material_009-material'].geometry} material={materials['Material.009']} />
            </group>
            <group name="Plane006" position={[-8.87, 12.88, 9.93]} rotation={[1.83, 0.3, -0.08]} scale={1.14}>
              <mesh name="Material_007-material007" geometry={nodes['Material_007-material007'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane007" position={[-8.72, 10.3, 18.33]} rotation={[-1.58, 1.26, -2.1]} scale={[0.48, 0.1, 0.89]}>
              <mesh name="Material_007-material008" geometry={nodes['Material_007-material008'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane008" position={[-7.74, 10.61, 18.33]} rotation={[-1.58, 1.26, -2.1]} scale={[0.48, 0.1, 0.89]}>
              <mesh name="Material_007-material009" geometry={nodes['Material_007-material009'].geometry} material={materials['Material.007']} />
            </group>
            <group name="Plane009" position={[7.86, -6.07, 14.64]} rotation={[-1.51, -0.37, 0.67]} scale={4.2}>
              <mesh name="Material_008-material" geometry={nodes['Material_008-material'].geometry} material={materials['Material.008']} />
              <mesh name="Material_008-material001" geometry={nodes['Material_008-material001'].geometry} material={materials['Material.008']} />
            </group>
            <group name="Plane010" position={[-5.12, 11.26, 26.57]} rotation={[-0.12, -0.11, 0.24]} scale={[2.99, 10.08, 5.75]}>
              <mesh name="Material_009-material001" geometry={nodes['Material_009-material001'].geometry} material={materials['Material.009']} />
              <mesh name="Material_009-material002" geometry={nodes['Material_009-material002'].geometry} material={materials['Material.009']} />
              <mesh name="Material_009-material003" geometry={nodes['Material_009-material003'].geometry} material={materials['Material.009']} />
              <mesh name="Material_009-material004" geometry={nodes['Material_009-material004'].geometry} material={materials['Material.009']} />
              <mesh name="Material_009-material005" geometry={nodes['Material_009-material005'].geometry} material={materials['Material.009']} />
              <mesh name="Material_009-material006" geometry={nodes['Material_009-material006'].geometry} material={materials['Material.009']} />
            </group>
            <group name="Plane011" position={[5.89, 6.62, 16.42]} rotation={[0.48, 0.49, -0.45]} scale={3.03}>
              <mesh name="Material_001-material" geometry={nodes['Material_001-material'].geometry} material={materials['Material.001']} />
            </group>
            <group name="Plane012" position={[11, 5.91, 18.95]} rotation={[0.57, -1.24, 1.5]} scale={[1.68, 2.36, 1.68]}>
              <mesh name="Material_002-material" geometry={nodes['Material_002-material'].geometry} material={materials['Material.002']} />
            </group>
            <group name="Sphere" position={[-12.21, 7.43, 8.13]} rotation={[-0.1, -0.03, 0.3]} scale={0.21}>
              <mesh name="Material_010-material" geometry={nodes['Material_010-material'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sphere001" position={[-3.04, 10.33, 8.13]} rotation={[-0.1, -0.03, 0.3]} scale={0.21}>
              <mesh name="Material_010-material001" geometry={nodes['Material_010-material001'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sphere002" position={[-8.13, 10.46, 23.86]} rotation={[-0.1, -0.03, 0.3]} scale={0.21}>
              <mesh name="Material_010-material002" geometry={nodes['Material_010-material002'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sphere003" position={[-7.66, 10.95, 18.14]} rotation={[-0.1, -0.03, 0.3]} scale={0.13}>
              <mesh name="Material_010-material003" geometry={nodes['Material_010-material003'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sphere004" position={[-8.77, 10.59, 18.14]} rotation={[-0.1, -0.03, 0.3]} scale={0.13}>
              <mesh name="Material_010-material004" geometry={nodes['Material_010-material004'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sphere005" position={[-7.38, 10.08, 18.67]} rotation={[-0.1, -0.03, 0.3]} scale={0.13}>
              <mesh name="Material_010-material005" geometry={nodes['Material_010-material005'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sphere006" position={[-8.5, 9.74, 18.69]} rotation={[-0.1, -0.03, 0.3]} scale={0.13}>
              <mesh name="Material_010-material006" geometry={nodes['Material_010-material006'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Sun" position={[0, 0, 8.59]} rotation={[0.18, 0.94, -0.2]}>
              <group name="Sun001" />
            </group>
          </group>
        </group>
        <group name="RootNode" position={[24.62, 0.51, -1.49]} rotation={[-Math.PI, -0.91, -Math.PI]} scale={0.06}>
          <group name="Model" scale={25}>
            <group name="Group1">
              <group name="Mesh1">
                <mesh name="Mesh1_Color_H07_0" geometry={nodes.Mesh1_Color_H07_0.geometry} material={materials.Color_H07} />
              </group>
            </group>
            <group name="Group10">
              <group name="Mesh11">
                <mesh name="Mesh11_Color_I04_0" geometry={nodes.Mesh11_Color_I04_0.geometry} material={materials.Color_I04} />
              </group>
            </group>
            <group name="Group11">
              <group name="Mesh12">
                <mesh name="Mesh12_Color_J04_0" geometry={nodes.Mesh12_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group12">
              <group name="Mesh13">
                <mesh name="Mesh13_baked_FrontColor_0" geometry={nodes.Mesh13_baked_FrontColor_0.geometry} material={materials.baked_FrontColor} />
              </group>
            </group>
            <group name="Group13">
              <group name="Mesh14">
                <mesh name="Mesh14_Color_F08_0" geometry={nodes.Mesh14_Color_F08_0.geometry} material={materials.Color_F08} />
              </group>
            </group>
            <group name="Group14">
              <group name="Mesh16">
                <mesh name="Mesh16_Color_I07_0" geometry={nodes.Mesh16_Color_I07_0.geometry} material={materials.Color_I07} />
              </group>
            </group>
            <group name="Group15">
              <group name="Mesh17">
                <mesh name="Mesh17_FrontColor_0" geometry={nodes.Mesh17_FrontColor_0.geometry} material={materials.FrontColor} />
              </group>
            </group>
            <group name="Group16">
              <group name="Mesh18">
                <mesh name="Mesh18_Color_F08_0" geometry={nodes.Mesh18_Color_F08_0.geometry} material={materials.Color_F08} />
              </group>
            </group>
            <group name="Group17">
              <group name="Mesh19">
                <mesh name="Mesh19_Color_I04_0" geometry={nodes.Mesh19_Color_I04_0.geometry} material={materials.Color_I04} />
              </group>
            </group>
            <group name="Group18">
              <group name="Mesh20">
                <mesh name="Mesh20_Color_J04_0" geometry={nodes.Mesh20_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group19">
              <group name="Mesh21">
                <mesh name="Mesh21_Color_F08_0" geometry={nodes.Mesh21_Color_F08_0.geometry} material={materials.Color_F08} />
              </group>
            </group>
            <group name="Group2">
              <group name="Mesh2">
                <mesh name="Mesh2_Color_J04_0" geometry={nodes.Mesh2_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group20">
              <group name="Group21">
                <group name="Mesh22">
                  <mesh name="Mesh22_Color_J04_0" geometry={nodes.Mesh22_Color_J04_0.geometry} material={materials.Color_J04} />
                </group>
              </group>
            </group>
            <group name="Group22">
              <group name="Mesh23">
                <mesh name="Mesh23_Color_J04_0" geometry={nodes.Mesh23_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group23">
              <group name="Mesh24">
                <mesh name="Mesh24_Color_A06_0" geometry={nodes.Mesh24_Color_A06_0.geometry} material={materials.Color_A06} />
                <mesh name="Mesh24_FrontColor_0" geometry={nodes.Mesh24_FrontColor_0.geometry} material={materials.FrontColor} />
              </group>
            </group>
            <group name="Group24">
              <group name="Mesh25">
                <mesh name="Mesh25_Color_J04_0" geometry={nodes.Mesh25_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group25">
              <group name="Group26">
                <group name="Mesh26">
                  <mesh name="Mesh26_Color_B04_0" geometry={nodes.Mesh26_Color_B04_0.geometry} material={materials.Color_B04} />
                </group>
              </group>
            </group>
            <group name="Group27">
              <group name="Mesh27">
                <mesh name="Mesh27_Color_H07_0" geometry={nodes.Mesh27_Color_H07_0.geometry} material={materials.Color_H07} />
              </group>
            </group>
            <group name="Group28">
              <group name="Mesh28">
                <mesh name="Mesh28_Color_I07_0" geometry={nodes.Mesh28_Color_I07_0.geometry} material={materials.Color_I07} />
              </group>
            </group>
            <group name="Group29">
              <group name="Mesh29">
                <mesh name="Mesh29_Color_H07_0" geometry={nodes.Mesh29_Color_H07_0.geometry} material={materials.Color_H07} />
              </group>
            </group>
            <group name="Group3">
              <group name="Mesh3">
                <mesh name="Mesh3_Color_H07_0" geometry={nodes.Mesh3_Color_H07_0.geometry} material={materials.Color_H07} />
              </group>
            </group>
            <group name="Group30">
              <group name="Mesh30">
                <mesh name="Mesh30_Color_H07_0" geometry={nodes.Mesh30_Color_H07_0.geometry} material={materials.Color_H07} />
              </group>
            </group>
            <group name="Group31">
              <group name="Mesh31">
                <mesh name="Mesh31_Color_F03_0" geometry={nodes.Mesh31_Color_F03_0.geometry} material={materials.Color_F03} />
              </group>
            </group>
            <group name="Group32">
              <group name="Mesh32">
                <mesh name="Mesh32_Color_F08_0" geometry={nodes.Mesh32_Color_F08_0.geometry} material={materials.Color_F08} />
              </group>
            </group>
            <group name="Group33">
              <group name="Mesh34">
                <mesh name="Mesh34_Color_I07_0" geometry={nodes.Mesh34_Color_I07_0.geometry} material={materials.Color_I07} />
              </group>
            </group>
            <group name="Group34">
              <group name="Mesh35">
                <mesh name="Mesh35_Color_H07_0" geometry={nodes.Mesh35_Color_H07_0.geometry} material={materials.Color_H07} />
              </group>
            </group>
            <group name="Group35">
              <group name="Mesh36">
                <mesh name="Mesh36_Color_I07_0" geometry={nodes.Mesh36_Color_I07_0.geometry} material={materials.Color_I07} />
              </group>
            </group>
            <group name="Group36">
              <group name="Mesh37">
                <mesh name="Mesh37_Color_B08_0" geometry={nodes.Mesh37_Color_B08_0.geometry} material={materials.Color_B08} />
              </group>
            </group>
            <group name="Group37">
              <group name="Mesh38">
                <mesh name="Mesh38_Color_J02_0" geometry={nodes.Mesh38_Color_J02_0.geometry} material={materials.Color_J02} />
              </group>
            </group>
            <group name="Group38">
              <group name="Mesh39">
                <mesh name="Mesh39_Color_A06_0" geometry={nodes.Mesh39_Color_A06_0.geometry} material={materials.Color_A06} />
              </group>
            </group>
            <group name="Group39">
              <group name="Mesh40">
                <mesh name="Mesh40_Color_J04_0" geometry={nodes.Mesh40_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group4">
              <group name="Mesh5">
                <mesh name="Mesh5_Color_F03_0" geometry={nodes.Mesh5_Color_F03_0.geometry} material={materials.Color_F03} />
              </group>
            </group>
            <group name="Group40">
              <group name="Group41">
                <group name="Mesh41">
                  <mesh name="Mesh41_Color_B08_0" geometry={nodes.Mesh41_Color_B08_0.geometry} material={materials.Color_B08} />
                </group>
              </group>
              <group name="Group42">
                <group name="Mesh42">
                  <mesh name="Mesh42_Color_B08_0" geometry={nodes.Mesh42_Color_B08_0.geometry} material={materials.Color_B08} />
                </group>
              </group>
            </group>
            <group name="Group43">
              <group name="Mesh43">
                <mesh name="Mesh43_Color_I07_0" geometry={nodes.Mesh43_Color_I07_0.geometry} material={materials.Color_I07} />
              </group>
            </group>
            <group name="Group44">
              <group name="Group45">
                <group name="Mesh44">
                  <mesh name="Mesh44_Color_J04_0" geometry={nodes.Mesh44_Color_J04_0.geometry} material={materials.Color_J04} />
                </group>
              </group>
            </group>
            <group name="Group46">
              <group name="Group47">
                <group name="Mesh45">
                  <mesh name="Mesh45_Color_B08_0" geometry={nodes.Mesh45_Color_B08_0.geometry} material={materials.Color_B08} />
                </group>
              </group>
              <group name="Group48">
                <group name="Mesh46">
                  <mesh name="Mesh46_Color_B08_0" geometry={nodes.Mesh46_Color_B08_0.geometry} material={materials.Color_B08} />
                </group>
              </group>
            </group>
            <group name="Group49">
              <group name="Mesh47">
                <mesh name="Mesh47_Color_J04_0" geometry={nodes.Mesh47_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group5">
              <group name="Mesh6">
                <mesh name="Mesh6_Color_J04_0" geometry={nodes.Mesh6_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group50">
              <group name="Mesh48">
                <mesh name="Mesh48_Color_J04_0" geometry={nodes.Mesh48_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group51">
              <group name="Mesh49">
                <mesh name="Mesh49_Color_B08_0" geometry={nodes.Mesh49_Color_B08_0.geometry} material={materials.Color_B08} />
              </group>
            </group>
            <group name="Group52">
              <group name="Mesh50">
                <mesh name="Mesh50_Color_J04_0" geometry={nodes.Mesh50_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group53">
              <group name="Mesh51">
                <mesh name="Mesh51_Color_A06_0" geometry={nodes.Mesh51_Color_A06_0.geometry} material={materials.Color_A06} />
              </group>
            </group>
            <group name="Group54">
              <group name="Mesh52">
                <mesh name="Mesh52_Color_B04_0" geometry={nodes.Mesh52_Color_B04_0.geometry} material={materials.Color_B04} />
              </group>
            </group>
            <group name="Group55">
              <group name="Mesh53">
                <mesh name="Mesh53_Color_J04_0" geometry={nodes.Mesh53_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Group56">
              <group name="Mesh55">
                <mesh name="Mesh55_baked_FrontColor_0" geometry={nodes.Mesh55_baked_FrontColor_0.geometry} material={materials.baked_FrontColor} />
              </group>
            </group>
            <group name="Group6">
              <group name="Mesh7">
                <mesh name="Mesh7_Color_F03_0" geometry={nodes.Mesh7_Color_F03_0.geometry} material={materials.Color_F03} />
              </group>
            </group>
            <group name="Group7">
              <group name="Mesh8">
                <mesh name="Mesh8_Color_F03_0" geometry={nodes.Mesh8_Color_F03_0.geometry} material={materials.Color_F03} />
              </group>
            </group>
            <group name="Group8">
              <group name="Mesh9">
                <mesh name="Mesh9_Color_I07_0" geometry={nodes.Mesh9_Color_I07_0.geometry} material={materials.Color_I07} />
              </group>
            </group>
            <group name="Group9">
              <group name="Mesh10">
                <mesh name="Mesh10_Color_J04_0" geometry={nodes.Mesh10_Color_J04_0.geometry} material={materials.Color_J04} />
              </group>
            </group>
            <group name="Mesh1_1">
              <group name="Mesh56">
                <mesh name="Mesh56_FrontColor2_0" geometry={nodes.Mesh56_FrontColor2_0.geometry} material={materials.FrontColor2} />
              </group>
            </group>
            <group name="Mesh1_2">
              <group name="Mesh57">
                <mesh name="Mesh57_FrontColor2_0" geometry={nodes.Mesh57_FrontColor2_0.geometry} material={materials.FrontColor2} />
              </group>
            </group>
            <group name="Mesh2_1">
              <group name="Mesh4">
                <mesh name="Mesh4_FrontColor1_0" geometry={nodes.Mesh4_FrontColor1_0.geometry} material={materials.FrontColor1} />
              </group>
            </group>
            <group name="Mesh2_2">
              <group name="Mesh15">
                <mesh name="Mesh15_FrontColor1_0" geometry={nodes.Mesh15_FrontColor1_0.geometry} material={materials.FrontColor1} />
              </group>
            </group>
            <group name="Mesh2_3">
              <group name="Mesh33">
                <mesh name="Mesh33_FrontColor1_0" geometry={nodes.Mesh33_FrontColor1_0.geometry} material={materials.FrontColor1} />
              </group>
            </group>
            <group name="Mesh2_4">
              <group name="Mesh54">
                <mesh name="Mesh54_FrontColor1_0" geometry={nodes.Mesh54_FrontColor1_0.geometry} material={materials.FrontColor1} />
              </group>
            </group>
            <group name="Mesh58">
              <mesh name="Mesh58_QFT_COLOR_QUAD_0" geometry={nodes.Mesh58_QFT_COLOR_QUAD_0.geometry} material={materials.QFT_COLOR_QUAD} />
              <mesh name="Mesh58_QFT_COLOR_TRI_0" geometry={nodes.Mesh58_QFT_COLOR_TRI_0.geometry} material={materials.QFT_COLOR_TRI} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[23.9, 0.51, -1.89]} rotation={[-Math.PI / 2, 0, -1.02]} scale={[0.21, 0.23, 0.28]}>
          <group name="551b894641694c319d2cab2e086e2b4afbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode001">
              <group name="Cube004" position={[0, 102.98, 0]}>
                <mesh name="Cube__0" geometry={nodes.Cube__0.geometry} material={materials['Scene_-_Root']} />
              </group>
              <group name="Cube_1" position={[0, 403.94, 0]}>
                <mesh name="Cube_1__0" geometry={nodes.Cube_1__0.geometry} material={materials['Scene_-_Root']} />
              </group>
              <group name="Symmetry">
                <group name="Cube_1_3" position={[175.04, 366.08, 0]} rotation={[0, Math.PI / 2, 0]}>
                  <mesh name="Cube_1_3__0" geometry={nodes.Cube_1_3__0.geometry} material={materials['Scene_-_Root']} />
                </group>
              </group>
              <group name="Symmetry_2">
                <group name="Null" position={[0, 144.4, 358.35]}>
                  <group name="Cube_1_2" position={[0, 221.68, 0]}>
                    <mesh name="Cube_1_2__0" geometry={nodes.Cube_1_2__0.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cube_2_2" position={[0, -41.04, 0]}>
                    <mesh name="Cube_2_2__0" geometry={nodes.Cube_2_2__0.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Symmetry_1" position={[0, -144.4, -358.35]}>
                    <group name="Cube_2" position={[-174.26, 373.77, 358.35]} rotation={[0, 0, Math.PI]}>
                      <mesh name="Cube_2__0" geometry={nodes.Cube_2__0.geometry} material={materials['Scene_-_Root']} />
                      <mesh name="Cube_2__0001" geometry={nodes.Cube_2__0001.geometry} material={materials['Scene_-_Root']} />
                      <mesh name="Cube_2__0002" geometry={nodes.Cube_2__0002.geometry} material={materials['Scene_-_Root']} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="RootNode002" position={[23.86, 1.21, -1.91]} rotation={[0, 0.69, 0]} scale={0.13}>
          <group name="Poly_CandleHolder1" position={[-0.1, 3.48, 1.71]} rotation={[-0.02, 0, 0.01]} scale={0.67}>
            <mesh name="Poly_CandleHolder1_CandleAndHolder_FinalProjectTextures_0" geometry={nodes.Poly_CandleHolder1_CandleAndHolder_FinalProjectTextures_0.geometry} material={materials.CandleAndHolder_FinalProjectTextures} />
          </group>
          <group name="Poly_Scroll" position={[0.02, 3.68, -1.05]} rotation={[1.57, 0.01, 0.15]}>
            <mesh name="Poly_Scroll_Scroll_Textures_0" geometry={nodes.Poly_Scroll_Scroll_Textures_0.geometry} material={materials.Scroll_Textures} />
          </group>
          <group name="QuilFeather_Combined" position={[-1.33, 2.9, 3.87]} rotation={[-1.02, 0.2, 0.8]} scale={0.55}>
            <mesh name="QuilFeather_Combined_QuilFinalOpacity_Textures_0" geometry={nodes.QuilFeather_Combined_QuilFinalOpacity_Textures_0.geometry} material={materials.QuilFinalOpacity_Textures} position={[-3.1, 6.99, -1.08]} rotation={[-0.66, -0.13, -0.35]} />
          </group>
        </group>
        <group name="Sketchfab_model002" position={[24.63, 1.74, -2.22]} rotation={[-2.08, -0.02, -3.1]} scale={0}>
          <group name="d3e878aa12f74bf39405eaaf897ed8f6fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode003">
              <group name="criptex" rotation={[Math.PI, 0, 0]} scale={100}>
                <mesh name="������010_Cryptex_0" geometry={nodes['������010_Cryptex_0'].geometry} material={materials.Cryptex} />
              </group>
            </group>
          </group>
        </group>
        <group name="DoorGroup" position={[21.53, 0.51, -8.88]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2001">
              <group name="RootNode004">
                <group name="Cube000" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Cube025" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0" geometry={nodes.Cube002__0.geometry} material={materials['Cube.000__0']} />
                  </group>
                  <mesh name="Cube000__0" geometry={nodes.Cube000__0.geometry} material={materials['Cube.000__0']} />
                </group>
                <group name="Cube019" position={[0, 100, -9.44]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[10, 100, 100]} />
                <group name="Cube020" position={[0, 100, 9.27]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 100, 100]} />
                <group name="Cube022" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0" geometry={nodes.Cube001__0.geometry} material={materials['Cube.000__0']} position={[0, 0.07, -0.02]} scale={[1, 0.92, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="DoorGroup001" position={[19.09, 0.51, -6.45]} rotation={[-Math.PI / 2, 0, 1.57]} scale={0.01 * REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx001" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2002">
              <group name="RootNode005">
                <group name="Cube030" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Cube029" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0001" geometry={nodes.Cube002__0001.geometry} material={materials['Cube.000__0.001']} />
                  </group>
                  <mesh name="Cube000__0001" geometry={nodes.Cube000__0001.geometry} material={materials['Cube.000__0.001']} />
                </group>
                <group name="Cube026" position={[0, 100, -9.44]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[10, 100, 100]} />
                <group name="Cube027" position={[0, 100, 9.27]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 100, 100]} />
                <group name="Cube028" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0001" geometry={nodes.Cube001__0001.geometry} material={materials['Cube.000__0.001']} position={[0, 0.07, 0]} scale={[1, 0.71, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="LampLeft" position={[22.53, 2.77, -9.17]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
          <group name="Collada_visual_scene_group003" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder004">
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials['Material.025']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight" position={[20.55, 2.78, -9.17]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
          <group name="Collada_visual_scene_group002" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder003">
              <mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={materials['Material.023']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampLeft001" position={[18.81, 2.77, -7.45]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group004" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder005">
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials['Material.027']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft001" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft001_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight001" position={[18.81, 2.78, -5.47]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group001" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder028">
              <mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['Material.026']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight001" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight001_Orientation" intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="ParentFlyMachine" position={[24.24, 1.12, -6.07]} rotation={[-Math.PI / 2, 0, 1.58]} scale={[0.35, 0.35, 0.5]}>
          <group name="Cube005" position={[1.77, 1.23, 1.73]} rotation={[-1.25, 0, 0]} scale={[0.03, 0.02, 0.03]}>
            <mesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials.struttura} />
          </group>
          <group name="Cube006" position={[2.88, 1.32, 1.3]} rotation={[-1.76, 1.39, -0.07]} scale={[0.01, 0.01, 0.02]}>
            <mesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials.struttura} />
          </group>
          <group name="Cube007" position={[2.88, 1.32, 1.3]} rotation={[-1.76, 1.39, -0.07]} scale={[0.01, 0.01, 0.02]}>
            <mesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials['Material.014']} />
          </group>
          <group name="Cube008" position={[0.3, -1.58, 1.35]} rotation={[-1.26, 0, 0]} scale={[0.05, 0.03, 0.05]}>
            <mesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials.struttura} />
          </group>
          <group name="Cube009" position={[0.05, -0.26, 1.15]} rotation={[-1.53, 0, 0]} scale={[0.05, 0.03, 0.05]}>
            <mesh name="Cube006_0" geometry={nodes.Cube006_0.geometry} material={materials['Torus.008_0']} />
          </group>
          <group name="Cube010" position={[0.01, -0.07, 1.15]} rotation={[-1.53, 0, 0]} scale={[0.66, 0.03, 1.11]}>
            <mesh name="Cube007_0" geometry={nodes.Cube007_0.geometry} material={materials['Material.015']} />
          </group>
          <group name="Cube011" position={[0.11, 1.05, 1.17]} rotation={[-1.53, 0, 0]} scale={0.01}>
            <mesh name="Cube008_0" geometry={nodes.Cube008_0.geometry} material={materials['Torus.008_0']} />
          </group>
          <group name="Cube012">
            <mesh name="Cube009_0" geometry={nodes.Cube009_0.geometry} material={materials['Material.017']} />
          </group>
          <group name="Cube013" />
          <group name="Cube014">
            <mesh name="Cube011_0" geometry={nodes.Cube011_0.geometry} material={materials.material} />
          </group>
          <group name="Cube015" position={[0.27, 0.96, 1.2]} scale={[0.04, 0.03, 0.03]}>
            <mesh name="Cube015_0" geometry={nodes.Cube015_0.geometry} material={materials['Material.016']} />
          </group>
          <group name="Cube016" position={[1.17, 1.26, 1.23]} rotation={[0.56, 0.17, 1.62]} scale={0.01}>
            <mesh name="Cube016_0" geometry={nodes.Cube016_0.geometry} material={materials.MANICO} />
          </group>
          <group name="Cube017" position={[-0.72, -1.05, 1.13]} rotation={[0, 0, 1.44]} scale={[0.01, 0.1, 0.01]}>
            <mesh name="Cube017_0" geometry={nodes.Cube017_0.geometry} material={materials.MANICO} />
          </group>
          <group name="Cube018" position={[-0.66, 1.07, 1.13]} rotation={[0, 0, 1.44]} scale={0.01}>
            <mesh name="Cube018_0" geometry={nodes.Cube018_0.geometry} material={materials.CORDA} />
          </group>
          <group name="Cube023" position={[0.3, -1.58, 1.35]} rotation={[-1.26, 0, 0]} scale={[0.05, 0.03, 0.05]}>
            <mesh name="Cube023_0" geometry={nodes.Cube023_0.geometry} material={materials['Material.014']} />
          </group>
          <group name="Cube024" position={[0.3, -1.58, 1.35]} rotation={[-1.26, 0, 0]} scale={[0.05, 0.03, 0.05]}>
            <mesh name="Cube024_0" geometry={nodes.Cube024_0.geometry} material={materials['Material.014']} />
          </group>
          <group name="Cube040">
            <mesh name="Cube040_0" geometry={nodes.Cube040_0.geometry} material={materials.cornicione} />
          </group>
          <group name="Cylinder" position={[-0.1, 1.05, 1.17]} rotation={[0, Math.PI / 2, 0]} scale={[0.05, 0.07, 0.49]}>
            <mesh name="Cylinder_0" geometry={nodes.Cylinder_0.geometry} material={materials.struttura} />
          </group>
          <group name="Cylinder001" position={[-0.25, 0.98, 1.45]} rotation={[0, Math.PI / 2, 0]} scale={[0.03, 0.04, 0.26]}>
            <mesh name="Cylinder001_0" geometry={nodes.Cylinder001_0.geometry} material={materials.struttura} />
          </group>
          <group name="Cylinder002" position={[1.83, 1.26, 1.58]} rotation={[0, 0.64, 0]} scale={0.01}>
            <mesh name="Cylinder002_0" geometry={nodes.Cylinder002_0.geometry} material={materials.CORDA} />
          </group>
          <group name="Torus001" position={[0.07, 1.02, 1.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh name="Torus001_0" geometry={nodes.Torus001_0.geometry} material={materials['Torus.008_0']} />
          </group>
          <group name="Torus002" position={[0.07, 1.29, 1.62]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh name="Torus002_0" geometry={nodes.Torus002_0.geometry} material={materials['Torus.008_0']} />
          </group>
          <group name="Torus008" position={[0.04, 1.29, 1.62]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh name="Torus008_0" geometry={nodes.Torus008_0.geometry} material={materials['Torus.008_0']} />
          </group>
          <group name="Torus014" position={[1.04, 1.49, 1.59]} rotation={[-1.81, 0.35, -0.34]} scale={[0.02, 0.03, 0.02]}>
            <mesh name="Torus014_0" geometry={nodes.Torus014_0.geometry} material={materials['Material.013']} position={[-6.77, 0.94, -16.19]} />
          </group>
          <mesh name="Cube021_0" geometry={nodes.Cube021_0.geometry} material={materials.MARMO} />
        </group>
        <mesh name="Cuadro" geometry={nodes.Cuadro.geometry} material={materials['Material.018']} position={[22.82, 0.81, -0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.89, 0.05, 0.03]} />
        <mesh name="Marco" geometry={nodes.Marco.geometry} material={materials.cornicione} position={[22.82, 0.81, -0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.91, 0.05, 0.03]} />
        <group name="Room" position={[22.62, 0.53, -4.34]} scale={[3.5, 1, 4.5]}>
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['Floor.001']} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials.OutsideWall} />
          <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={materials.MiddleWall} />
          <mesh name="Plane001_4" geometry={nodes.Plane001_4.geometry} material={materials.Wall_brick} />
          <mesh name="Plane001_5" geometry={nodes.Plane001_5.geometry} material={materials.Floor} />
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/models/rooms/Room_workshop.glb')
