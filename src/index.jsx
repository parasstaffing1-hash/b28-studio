import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

console.log("[INDEX.JSX] Starting render. Root element:", document.getElementById("root"));

try {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
  console.log("[INDEX.JSX] ReactDOM.render completed successfully.");
} catch (err) {
  console.error("[INDEX.JSX] RENDER ERROR:", err);
}

reportWebVitals();
