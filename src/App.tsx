import { useEffect, useMemo, useState } from "react";
import Actions from "./Actions";
import HoverInfo from "./HoverInfo";
import Table from "./Table";
import Three from "./Three";
import { filterPoints, Point } from "./utils";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [points, setPoints] = useState<Point[] | undefined>([]);
  const filteredPoints = points ? filterPoints(points) : [];
  const [showTable, setShowTable] = useState(false);
  const loadedBefore = localStorage.getItem("loadedBefore");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<Point | undefined | null>(
    undefined
  );

  const fetchPoints = async () => {
    toast.info(
      "Fetching Clicks - Free servers take time to spin up. This may take a while..."
    );
    await fetch("https://geoback-production.up.railway.app/points")
      .then(async (res) => {
        if (!res.ok) throw new Error("Error Fetching Clicks");
        setPoints((await res.json()) ?? []);
        toast.success("Clicks Fetched");
      })
      .catch((err) => {
        toast.error("Error Fetching Clicks");
      });
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  const scene = useMemo(
    () => <Three points={filteredPoints} setHoveredPoint={setHoveredPoint} />,
    [filteredPoints.length]
  );

  return (
    <>
      {!loadedBefore && (
        <div className="intro">
          <h1>Hello World</h1>
          <p>
            Click the button on the top right. A point will be placed on the
            Earth at the location you are at now, unless you're using a VPN. You
            can then hover over that point to see more information about where
            you are.
          </p>
          <button
            onClick={() => {
              setIsLoaded(true);
              localStorage.setItem("loadedBefore", "true");
            }}
          >
            Get Started
          </button>
        </div>
      )}
      {points && (
        <>
          {loadedBefore && (
            <Actions
              points={points}
              setPoints={setPoints}
              setShowTable={setShowTable}
              showTable={showTable}
            />
          )}
          {points && scene}
          {hoveredPoint && <HoverInfo hoveredPoint={hoveredPoint} />}
          {showTable && <Table points={filteredPoints} />}
        </>
      )}
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
};

export default App;
