"use client";

import { useEffect, useState } from "react";

export default function ViewportDebugger() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewport({ width, height });

      // Hitung contoh font size dengan formula clamp
      // clamp(3rem, 10vw, 12rem)
      const vwValue = (width * 10) / 100; // 10vw in pixels
      const minPx = 3 * 16; // 3rem = 48px
      const maxPx = 12 * 16; // 12rem = 192px
      const actualPx = Math.min(Math.max(vwValue, minPx), maxPx);
      setFontSize(
        `${(actualPx / 16).toFixed(2)}rem (${actualPx.toFixed(0)}px)`
      );
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  if (viewport.width === 0) return null;

  return (
    <div
      className="fixed top-4 right-4 z-[9999] bg-black/90 text-white rounded-lg shadow-2xl border border-green-500/50"
      style={{ padding: "1rem", fontFamily: "monospace" }}
    >
      <div className="space-y-2 text-sm">
        <div className="font-bold text-green-400 border-b border-green-500/30 pb-2 mb-2">
          🔍 Viewport Debugger
        </div>

        <div>
          <span className="text-gray-400">Width:</span>{" "}
          <span className="font-bold text-white">{viewport.width}px</span>
        </div>

        <div>
          <span className="text-gray-400">Height:</span>{" "}
          <span className="font-bold text-white">{viewport.height}px</span>
        </div>

        <div className="border-t border-gray-700 pt-2 mt-2">
          <div className="text-gray-400 text-xs mb-1">Hero Title Size:</div>
          <div className="font-bold text-green-400">{fontSize}</div>
          <div className="text-xs text-gray-500 mt-1">
            clamp(3rem, 10vw, 12rem)
          </div>
        </div>

        <div className="border-t border-gray-700 pt-2 mt-2">
          <div className="text-xs text-gray-400">
            {viewport.width < 768 && "📱 Mobile"}
            {viewport.width >= 768 && viewport.width < 1024 && "📱 Tablet"}
            {viewport.width >= 1024 && viewport.width < 1470 && "💻 Desktop"}
            {viewport.width >= 1470 &&
              viewport.width < 1920 &&
              "🖥️ Large Desktop"}
            {viewport.width >= 1920 && viewport.width < 2560 && "🖥️ Full HD"}
            {viewport.width >= 2560 && "🖥️ 2K/4K"}
          </div>
        </div>

        {/* Perbandingan Size */}
        <div className="border-t border-gray-700 pt-2 mt-2">
          <div className="text-xs text-gray-400 mb-1">vs 1470px Base:</div>
          <div className="font-bold">
            {viewport.width >= 1470 ? (
              <span className="text-green-400">
                +{(((viewport.width - 1470) / 1470) * 100).toFixed(1)}% wider
              </span>
            ) : (
              <span className="text-yellow-400">
                {(((viewport.width - 1470) / 1470) * 100).toFixed(1)}% narrower
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
