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
  const userIp = localStorage.getItem("userIp");
  let color = "yellow";
  if (point.ip_address === userIp) {
    color = "red";
  }
  return (
    <Sphere
      name={point.id}
      position={position}
      args={[0.01, 1, 1]}
      material-color={color}
      onPointerOver={() => setHoveredPoint(point)}
      onPointerOut={() => setHoveredPoint(null)}
    />
  );
};

export default Point;
