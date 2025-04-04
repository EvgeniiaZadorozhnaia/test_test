import "./App.css";
import Navbar from "./widgets/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import WidgetsPage from "./pages/WidgetsPage/WidgetsPage";
import { LayoutContext } from "./context/context";
import { useEffect, useState } from "react";

function App() {
  const [layout, setLayout] = useState(() => {
    const stored = localStorage.getItem("grid-layout");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("grid-layout", JSON.stringify(layout));
  }, [layout]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <Router>
        <Navbar />
        <div className="max-w-[1200px] mx-auto mt-6 min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/widgets" element={<WidgetsPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </LayoutContext.Provider>
  );
}

export default App;
