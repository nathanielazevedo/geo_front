import { useEffect, useMemo, useRef } from "react";
import { Circle, OrbitControls, Stars } from "@react-three/drei";
import { coordinatesToPosition } from "./utils";
import Earth from "./Earth";
import Point from "./Point";
import Clouds from "./Clouds";
import { useThree } from "@react-three/fiber";

const Scene = ({
  points,
  setHoveredPoint,
}: {
  points: any;
  setHoveredPoint: any;
}) => {
  const earth = useMemo(() => <Earth />, []);
  const clouds = useMemo(() => <Clouds />, []);
  const scene = useThree((state) => state.scene);
  console.log("scene");

  useEffect(() => {
    if (points.length == 0) return;
    const newPoint = points[points.length - 1];
    const position = coordinatesToPosition(
      [newPoint.latitude, newPoint.longitude],
      2
    );
    const newPointJsx = (
      <Point
        key={newPoint.id}
        point={newPoint}
        position={position}
        setHoveredPoint={setHoveredPoint}
      />
    ) as any;

    scene.add(newPointJsx);
  }, [points]);

  const pointsMemo = useMemo(() => {
    return points.map((point: any) => {
      const position = coordinatesToPosition(
        [point.latitude, point.longitude],
        2
      );
      return (
        <Point
          key={point.id}
          point={point}
          position={position}
          setHoveredPoint={setHoveredPoint}
        />
      );
    });
  }, []);

  const stars = useMemo(
    () => (
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    ),
    []
  );
  return (
    <>
      {earth}
      {stars}
      {clouds}
      {pointsMemo}
      <directionalLight intensity={0.3} />
      <ambientLight intensity={0.1} />
      <OrbitControls
        enableZoom={true}
        maxZoom={-0.5}
        zoomSpeed={0.5}
        minDistance={2.3}
      />
    </>
  );
};

export default Scene;
