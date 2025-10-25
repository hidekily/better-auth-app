import { createRoot } from "react-dom/client";
import { App } from "./pages/App";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}


