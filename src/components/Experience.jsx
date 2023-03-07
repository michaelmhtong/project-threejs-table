import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh>
    </>
  );
};

export default Experience;
