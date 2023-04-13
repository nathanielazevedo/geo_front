import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";
import { Point } from "./utils";

function Three({
  points,
  setHoveredPoint,
}: {
  points: Point[];
  setHoveredPoint: (point: Point | null) => void;
}) {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Scene points={points} setHoveredPoint={setHoveredPoint} />
    </Canvas>
  );
}

export default Three;
