import React, { useEffect } from "react";
import "./SplineViewer.css";

export default function SplineViewer({ url1, url2 }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@0.9.290/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div>
        <iframe
          title="Spline Design 1"
          className="init-iframe"
          src={url1}
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div id="avatar">
        <iframe
          title="Spline Design 2"
          className="avatar"
          frameBorder={0}
          src={url2}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
