import { useMemo, useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { coordinatesToPosition } from "./utils";
import Earth from "./Earth";
import Point from "./Point";
import Clouds from "./Clouds";
import { Point as PointType } from "./utils";

const Scene = ({
  points,
  setHoveredPoint,
}: {
  points: PointType[];
  setHoveredPoint: (point: PointType | null) => void;
}) => {
  const earth = useMemo(() => <Earth />, []);
  const clouds = useMemo(() => <Clouds />, []);
  // const pointsRef = useRef<any>([]);

  // const pointsMemo = useMemo(() => {
  //   if (pointsRef.current.length > 0) {
  //     console.log("here");
  //     const newPoint = points[points.length - 1];
  //     const position = coordinatesToPosition(
  //       [newPoint.latitude, newPoint.longitude],
  //       2
  //     );
  //     const newPointJsx = (
  //       <Point
  //         key={newPoint.id}
  //         point={newPoint}
  //         position={position}
  //         setHoveredPoint={setHoveredPoint}
  //       />
  //     ) as any;
  //     pointsRef.current.push(newPointJsx);
  //     console.log(pointsRef.current);
  //     return pointsRef.current;
  //   } else {
  //     const pointsJsx = points.map((point: PointType) => {
  //       const position = coordinatesToPosition(
  //         [point.latitude, point.longitude],
  //         2
  //       );
  //       return (
  //         <Point
  //           key={point.id}
  //           point={point}
  //           position={position}
  //           setHoveredPoint={setHoveredPoint}
  //         />
  //       );
  //     });
  //     pointsRef.current = pointsJsx;
  //     return pointsJsx;
  //   }
  // }, [points]);

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
      {points.map((point: PointType, index: number) => {
        const position = coordinatesToPosition(
          [point.latitude, point.longitude],
          2
        );
        return (
          <Point
            key={point.id ?? index}
            point={point}
            position={position}
            setHoveredPoint={setHoveredPoint}
          />
        );
      })}
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
