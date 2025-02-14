import React, { useState } from "react";
import { sonyCameras, sonyLenses } from "../data/sonyData";

export default function SonyCalculator() {
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedLens, setSelectedLens] = useState("");

  const camera = sonyCameras.find((cam) => cam.id === parseInt(selectedCamera));
  const lens = sonyLenses.find((lens) => lens.id === parseInt(selectedLens));

  const calculateEquivalent = (focalLength: number, cropFactor: number) => {
    return Math.round(focalLength * cropFactor);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sony Lens Calculator</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-2">Camera:</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedCamera}
            onChange={(e) => {
              setSelectedCamera(e.target.value);
              setSelectedMode("");
            }}
          >
            <option value="">Select Camera</option>
            {sonyCameras.map((camera) => (
              <option key={camera.id} value={camera.id}>
                {camera.model}
              </option>
            ))}
          </select>
        </div>

        {camera && (
          <div>
            <label className="block mb-2">Mode:</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
            >
              <option value="">Select Mode</option>
              {camera.modes.map((mode, index) => (
                <option key={index} value={index}>
                  {mode.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block mb-2">Lens:</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedLens}
            onChange={(e) => setSelectedLens(e.target.value)}
          >
            <option value="">Select Lens</option>
            {sonyLenses.map((lens) => (
              <option key={lens.id} value={lens.id}>
                {lens.model}
              </option>
            ))}
          </select>
        </div>

        {camera && lens && selectedMode !== "" && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h3 className="font-bold mb-2">35mm Equivalent Focal Length:</h3>
            <p>
              {lens.focalRange.min}mm →{" "}
              {calculateEquivalent(
                lens.focalRange.min,
                camera.modes[parseInt(selectedMode)].cropFactor
              )}
              mm to {lens.focalRange.max}mm →{" "}
              {calculateEquivalent(
                lens.focalRange.max,
                camera.modes[parseInt(selectedMode)].cropFactor
              )}
              mm
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Crop Factor: {camera.modes[parseInt(selectedMode)].cropFactor}x
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
