import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";
import { Point } from "./utils";

function Globe({
  points,
  setHoveredPoint,
  style,
  className,
}: {
  points: Point[];
  setHoveredPoint?: (point: Point | null) => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <Canvas style={style} className={className}>
      <Scene points={points} setHoveredPoint={setHoveredPoint || (() => {})} />
    </Canvas>
  );
}

export default Globe;
