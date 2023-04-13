import { Sphere } from "@react-three/drei";

const Point = ({
  position,
  point,
  setHoveredPoint,
}: {
  position: [number, number, number];
  point: any;
  setHoveredPoint: any;
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
