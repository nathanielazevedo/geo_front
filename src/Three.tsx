import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";

function Three({
  points,
  setHoveredPoint,
}: {
  points: any;
  setHoveredPoint: any;
}) {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Scene points={points} setHoveredPoint={setHoveredPoint} />
    </Canvas>
  );
}

export default Three;
