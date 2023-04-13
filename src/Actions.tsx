import { useState } from "react";

const Actions = ({
  points,
  setPoints,
  setShowTable,
  showTable,
}: {
  setPoints: (points: any) => void;
  points: any;
  setShowTable: any;
  showTable: boolean;
}) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setDisabled(true);
    await fetch("http://localhost:3000/").then((res) => {
      setPoints((points: any) => [...points, res.json()]);
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
        onClick={() => setShowTable((showTable: boolean) => !showTable)}
      >
        {showTable ? "Hide" : "Show"} Table
      </button>
    </div>
  );
};

export default Actions;
