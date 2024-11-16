import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);