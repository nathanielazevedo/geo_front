import { Sphere } from "@react-three/drei";
import { Point as PointType } from "./utils";

const Point = ({
  position,
  point,
  setHoveredPoint,
}: {
  position: [number, number, number];
  point: PointType;
  setHoveredPoint: (point: PointType | null) => void;
}) => {
  console.log("POINT");
  return (
    <Sphere
      position={position}
      args={[0.01, 1, 1]}
      material-color="yellow"
      onPointerOver={() => setHoveredPoint(point)}
      onPointerOut={() => setHoveredPoint(null)}
    />
  );
};

export default Point;
