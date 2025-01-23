import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import SlideshowComponent from "./SlideshowComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <SlideshowComponent />
  </StrictMode>
);
