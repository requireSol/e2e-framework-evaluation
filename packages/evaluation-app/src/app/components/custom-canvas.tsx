"use client";

import React, { useRef, useState } from "react";
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

export function CustomCanvas() {
  // Ref für das Canvas
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const [strokeColor, setStrokeColor] = useState<string>("black");
  const [strokeWidth, setStrokeWidth] = useState<number>(5);

  // Bild herunterladen
  const handleDownloadImage = () => {
    if (canvasRef.current) {
      canvasRef.current
        .exportImage("png")
        .then((dataUrl) => {
          // Erstelle einen Link für den Download
          const link = document.createElement("a");
          link.href = dataUrl; // Base64-Bilddaten als Linkquelle
          link.download = "canvas-drawing.png"; // Dateiname
          link.click(); // Automatischer Klick auf den Link, um den Download auszulösen
        })
        .catch((error) => {
          console.error("Fehler beim Exportieren des Bildes:", error);
        });
    }
  };

  // Canvas löschen
  const handleClearCanvas = () => {
    canvasRef.current?.clearCanvas();
  };

  return (
    <div>
      {/* Canvas-Komponente */}
      <ReactSketchCanvas
        ref={canvasRef}
        style={styles}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
      />

      {/* Werkzeugleiste */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleDownloadImage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Download Image
        </button>
        <button
          onClick={handleClearCanvas}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Clear Canvas
        </button>
      </div>

      {/* Einstellungen */}
      <div className="mt-4">
        <label className="mb-2 block dark:text-white">Stroke Color:</label>
        <input
          type="color"
          value={strokeColor}
          onChange={(e) => setStrokeColor(e.target.value)}
        />

        <label className="mt-4 mb-2 block dark:text-white">Stroke Width:</label>
        <input
          type="range"
          min={1}
          max={20}
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
