import { TextureLoader } from "three";
import globe_dark from "./assets/globe.jpg";

const Earth = () => {
  return (
    <mesh name="earth">
      <sphereGeometry args={[2, 20, 20]} />
      <meshStandardMaterial
        map={new TextureLoader().load(globe_dark)}
        color="white"
        // wireframe
      />
    </mesh>
  );
};

export default Earth;
