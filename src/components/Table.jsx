import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import * as Three from "three";

export function Table(props) {
  const { nodes, materials } = useGLTF("./models/Table.gltf");
  const { legs, legsColor, tableWidth } = useConfigurator();

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor]);

  const tableWdithScale = tableWidth / 100;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plate.geometry}
        material={materials.Plate}
        castShadow
        scale={[tableWdithScale, 1, 1]}
      />

      {/* leg option 1 */}
      {legs === 0 && (
        <>
          <mesh
            geometry={nodes.Legs01Left.geometry}
            material={materials.Metal}
            position={[-1.5 * tableWdithScale, 0, 0]}
            castShadow
          />
          <mesh
            geometry={nodes.Legs01Right.geometry}
            material={materials.Metal}
            position={[1.5 * tableWdithScale, 0, 0]}
            castShadow
          />
        </>
      )}

      {/* leg option 2 */}
      {legs === 1 && (
        <>
          <mesh
            geometry={nodes.Legs02Left.geometry}
            material={materials.Metal}
            position={[-1.5 * tableWdithScale, 0, 0]}
            castShadow
          />
          <mesh
            geometry={nodes.Legs02Right.geometry}
            material={materials.Metal}
            position={[1.5 * tableWdithScale, 0, 0]}
            castShadow
          />
        </>
      )}

      {/* leg option 3 */}
      {legs === 2 && (
        <>
          <mesh
            geometry={nodes.Legs03Left.geometry}
            material={materials.Metal}
            position={[-1.5 * tableWdithScale, 0, 0]}
            castShadow
          />
          <mesh
            geometry={nodes.Legs03Right.geometry}
            material={materials.Metal}
            position={[1.5 * tableWdithScale, 0, 0]}
            castShadow
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("./models/Table.gltf");
