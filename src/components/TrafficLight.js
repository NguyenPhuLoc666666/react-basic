import React, { useState } from "react";

function TrafficLight() {
  const [light, setLight] = useState(0);
  const handleNextButton = () => {
    setLight((prev) => {
      if (prev === 2) return 0;
      return prev + 1;
    });
  };
  return (
    <div className="mt-4 bg-white w-80 h-auto flex flex-col justify-center items-center p-2">
      <button
        className="bg-blue-500 px-2 py-1 rounded text-white"
        onClick={handleNextButton}
      >
        next
      </button>
      <div className="flex gap-4 my-2">
        <div
          className={`w-4 h-4 rounded border ${
            light === 0 ? "bg-green-500" : "bg-white"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded border ${
            light === 1 ? "bg-yellow-500" : "bg-white"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded border ${
            light === 2 ? "bg-red-500" : "bg-white"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
