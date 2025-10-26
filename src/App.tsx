import { useMemo, useState } from "react";
import HoverInfo from "./HoverInfo";
import Table from "./Table";
import Three from "./Three";
import { filterPoints, Point } from "./utils";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [points, setPoints] = useState<Point[] | undefined>([]);
  const filteredPoints = points ? filterPoints(points) : [];
  const [showTable, setShowTable] = useState(false);
  const loadedBefore = localStorage.getItem("loadedBefore");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<Point | undefined | null>(
    undefined
  );

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
