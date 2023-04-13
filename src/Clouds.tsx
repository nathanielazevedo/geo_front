import { useFrame } from "@react-three/fiber";
import React, { MutableRefObject, useRef } from "react";
import { BufferGeometry, Material, Mesh, TextureLoader } from "three";
import clouds from "./assets/clouds.png";

const Clouds = () => {
  const cloudsRef = useRef<any>();
  useFrame(({ clock }) => {
    cloudsRef.current.rotation.y = clock.getElapsedTime() / 50;
  });
  return (
    <mesh name="clouds" ref={cloudsRef}>
      <sphereGeometry args={[2, 100, 100]} />
      <meshLambertMaterial
        map={new TextureLoader().load(clouds)}
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

export default Clouds;
