import './App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Model  from './components/3DModels/Chair'
import CarModel  from './components/3DModels/Cars/Car'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            <CarModel/>
          </Stage>
          <OrbitControls enableZoom={true}/>
        </Canvas>
      </div>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Model/>
        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>
  );
}

export default App;
