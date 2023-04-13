import { useState } from "react";
import { Point } from "./utils";

const Actions = ({
  points,
  setPoints,
  setShowTable,
  showTable,
}: {
  setPoints: (points: Point[]) => void;
  points: Point[];
  setShowTable: (showTable: boolean) => void;
  showTable: boolean;
}) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setDisabled(true);
    await fetch("http://localhost:3000/").then(async (res) => {
      const newPoint = (await res.json()) as Point;
      setPoints([...points, newPoint]);
    });
    setDisabled(false);
  };

  return (
    <div className="actions">
      <h3>{points.length}</h3>
      <button disabled={disabled} onClick={handleClick}>
        Click
      </button>
      <button
        style={{ marginTop: "5px", width: "150px" }}
        onClick={() => setShowTable(!showTable)}
      >
        {showTable ? "Hide" : "Show"} Table
      </button>
    </div>
  );
};

export default Actions;
