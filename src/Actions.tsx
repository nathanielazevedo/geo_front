import { useState } from "react";
import { Point } from "./utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast.info("Processing Click", {
      position: "bottom-right",
      autoClose: 2000,
    });
    setDisabled(true);
    await fetch("https://geoback-production.up.railway.app.com/")
      .then(async (res) => {
        if (!res.ok) throw new Error("Error Processing Click");
        const newPoint = (await res.json()) as Point;
        localStorage.setItem("userIp", newPoint.ip_address);
        setPoints([...points, newPoint]);
        toast.success("Click Added");
      })
      .catch((err) => {
        toast.error("Error Processing Click");
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
