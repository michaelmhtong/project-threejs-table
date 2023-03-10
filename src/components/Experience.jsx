import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";

const Experience = () => {
  const { legs } = useConfigurator(); // re-render the stage & shadow when legs change
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#999999",
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
