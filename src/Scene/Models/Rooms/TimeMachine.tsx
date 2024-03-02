/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Room_library.gltf
*/


import React, { useRef, useState } from 'react'
import { useAnimations, useGLTF, Html } from '@react-three/drei'
import {  selectPath } from '../../../Common/Utils/Utils'
import '../../Styles/GameScene.scss'
import { SCENE_LIGHT_INTENSITY, REDUCE_SCALE_DOOR} from '../Modifiers'
export function TimeMachine(props: any) {
  const group = useRef()
  const [show, setShow] = useState(false);
  const { nodes, materials } = useGLTF(`${selectPath()}/rooms/TimeMachine.glb`) as any
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Class">
        <group name="DoorGroup" position={[4.49, 0.53, -9.9]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01 *REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2001">
              <group name="RootNode001">
                <group name="Cube000" position={[-83.59, 29.67, -17.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Cube002" position={[1.57, -0.18, 1.61]}>
                    <mesh name="Cube002__0" geometry={nodes.Cube002__0.geometry} material={materials['Cube.000__0']} />
                  </group>
                </group>
                <group name="Cube001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0" geometry={nodes.Cube001__0.geometry} material={materials['Cube.000__0']} position={[0, 0.07, -0.03]} scale={[1, 0.64, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="LampLeft" position={[3.44, 2.8, -9.71]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
          <group name="Collada_visual_scene_group001" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder001">
              <mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft_Orientation" intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight" position={[5.42, 2.81, -9.71]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.28}>
          <group name="Collada_visual_scene_group" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder028">
              <mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight_Orientation" intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampLeft001" position={[8.15, 2.8, -11.41]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group003" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder003">
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft001" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft001_Orientation" intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight001" position={[8.15, 2.81, -13.39]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.28}>
          <group name="Collada_visual_scene_group002" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder002">
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight001" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight001_Orientation" intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampLeft002" position={[5.38, 2.91, -16.3]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
          <group name="Collada_visual_scene_group004" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder004">
              <mesh name="defaultMaterial004" geometry={nodes.defaultMaterial004.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightLeft002" position={[-0.06, 0.26, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightLeft002_Orientation" intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="LampRight002" position={[3.4, 2.92, -16.29]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
          <group name="Collada_visual_scene_group005" position={[0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cylinder005">
              <mesh name="defaultMaterial005" geometry={nodes.defaultMaterial005.geometry} material={materials['Material.012']} position={[-0.07, 0, 0]} />
            </group>
          </group>
          <group name="LightRight002" position={[-0.06, 0.26, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.55}>
            <pointLight name="LightRight002_Orientation" intensity={SCENE_LIGHT_INTENSITY} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="DoorGroup001" position={[7.87, 0.53, -12.4]} rotation={[-Math.PI / 2, 0, -1.57]} scale={0.01 *REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx001" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2002">
              <group name="RootNode002">
                <group name="Cube007" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0001" geometry={nodes.Cube001__0001.geometry} material={materials['Cube.000__0']} position={[0, 0.07, -0.03]} scale={[1, 0.83, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="DoorGroup002" position={[4.36, 0.53, -16.08]} rotation={[-Math.PI / 2, 0, 3.14]} scale={0.01 *REDUCE_SCALE_DOOR}>
          <group name="0d6cf17bcfde48d9b7d35e076d70e1e3fbx002" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2003">
              <group name="RootNode003">
                <group name="Cube005" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube001__0002" geometry={nodes.Cube001__0002.geometry} material={materials['Cube.000__0']} position={[0, 0.07, -0.03]} scale={[1, 0.83, 1]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Room" position={[3.84, 0.56, -13]} rotation={[0, Math.PI / 2, 0]} scale={[3, 1, 4]}>
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Floor.001']} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials.OutsideWall} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials.InsideWall} />
          <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={materials.MiddleWall} />
        </group>
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[4.37, 1.5, -16.03]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.5, 1.25, 0.09]} />
      </group>
    </group>
  )
}

useGLTF.preload(`${selectPath()}/rooms/TimeMachine.glb`)
