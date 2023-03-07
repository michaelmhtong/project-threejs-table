import { Canvas } from "@react-three/fiber";
import { DashBoard } from "./components/DashBoard";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <DashBoard />
    </>
  );
}

export default App;
