import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { WorkoutsProvider } from "./contexts/WorkoutsContext";
import Dashboard from "./Dashboard.tsx";
import Workouts from "./Workouts.tsx";
import SettingsPage from "./Components/Settings/page.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/workouts", element: <Workouts /> },
  { path: "/settings", element: <SettingsPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WorkoutsProvider>
      <RouterProvider router={router} />
    </WorkoutsProvider>
  </StrictMode>,
);
