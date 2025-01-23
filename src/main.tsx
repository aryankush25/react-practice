import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import SlideshowComponent from "./SlideshowComponent";
import DashboardComponent from "./DashboardComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SlideshowComponent /> */}
    <DashboardComponent />
  </StrictMode>
);
