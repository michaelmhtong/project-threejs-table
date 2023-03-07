import { OrbitControls, Stage } from "@react-three/drei";
import { Table } from "./Table";

const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#85ffbd",
          colorBlend: 2,
          opacity: 2,
        }}
        // adjust how close to the object
        adjustCamera={1.5}
      >
        <Table />
      </Stage>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};

export default Experience;
