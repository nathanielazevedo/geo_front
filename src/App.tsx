import { useEffect, useMemo, useState } from "react";
import Actions from "./Actions";
import HoverInfo from "./HoverInfo";
import Table from "./Table";
import Three from "./Three";
import { filterPoints } from "./utils";
import "./App.css";

const App = () => {
  const [points, setPoints] = useState<any>(undefined);
  const filteredPoints = points ? filterPoints(points) : [];
  const [showTable, setShowTable] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);

  const fetchPoints = async () => {
    await fetch("http://localhost:3000/points").then(async (res) => {
      setPoints((await res.json()) ?? []);
    });
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  const scene = useMemo(
    () => <Three points={filteredPoints} setHoveredPoint={setHoveredPoint} />,
    [points]
  );

  return (
    points && (
      <>
        <Actions
          points={points}
          setPoints={setPoints}
          setShowTable={setShowTable}
          showTable={showTable}
        />
        {points && scene}
        {hoveredPoint && <HoverInfo hoveredPoint={hoveredPoint} />}
        {showTable && <Table points={filteredPoints} />}
      </>
    )
  );
};

export default App;
