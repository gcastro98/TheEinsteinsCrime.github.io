/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Tesla_character.glb
*/

import React, { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { selectPath } from "../Utils/Utils";

type results = 1 | 2| 3| 4| 5| 6 | undefined
export function TeslaCharacter(props: any) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    `./TheEinsteinsCrime/models/characters/Tesla_character.glb`
  ) as any;
  // const { actions } = useAnimations(animations, group)

  const [positionX, setPositionX] = useState(13);
  const [positionY, setPositionY] = useState(-13);

  const nextX = () => setPositionX(positionX + 1);
  const nextY = () => setPositionY(positionY - 1);
  const backX = () => setPositionX(positionX - 1);
  const backY = () => setPositionY(positionY + 1);
  const XlimitUp = 25;
  const XlimitLess = 0;
  const YlimitUp = 0;
  const YlimitLess = -25;
  console.log(positionX, positionY);

  
  return (
    <group
      {...props}
      position={[positionX, 0.5, positionY]}
      scale={1}
      dispose={null}
    >
       {/* <Dice
      size={50}
      onRoll={handleClick}
      defaultValue={result}
      backgroundColor="#fff"
    /> */}
      <group position={[0.52, -0.57, -0.48]} scale={0.49}>
        <mesh
          visible={positionX < XlimitUp}
          geometry={nodes.right.geometry}
          material={materials.arrow}
          position={[2.34, 2.63, -0.02]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.43}
          onClick={() => nextX()}
        />
        <mesh
          visible={positionX > XlimitLess}
          geometry={nodes.left.geometry}
          material={materials.arrow}
          position={[-2.32, 2.63, -0.01]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.43}
          onClick={() => backX()}
        />
        <mesh
          visible={positionY < YlimitUp}
          geometry={nodes.back.geometry}
          material={materials.arrow}
          position={[0.01, 2.63, 2.31]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.43}
          onClick={() => backY()}
        />
        <mesh
          visible={positionY > YlimitLess}
          geometry={nodes.front.geometry}
          material={materials.arrow}
          position={[0, 2.63, -2.35]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.43}
          onClick={() => nextY()}
        />
      </group>
      <mesh
        geometry={nodes.Object_2001.geometry}
        material={materials.material_0}
        position={[0.52, 1.61, -0.47]}
        rotation={[-1.58, 0, -0.26]}
        scale={0.34}
      />
    </group>
  );
}

// useGLTF.preload('/models/rooms/Tesla_character.glb')
