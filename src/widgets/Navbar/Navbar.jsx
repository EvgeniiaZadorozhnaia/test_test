import React, { useContext, useEffect, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutContext } from "../../context/context";
import WarningAlert from "../../components/Alert/Alert";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { layout, showAlert, setShowAlert } = useContext(LayoutContext);
  const prevLayoutRef = useRef([]);

  useEffect(() => {
    if (location.pathname === "/widgets") {
      const savedLayout = JSON.parse(
        localStorage.getItem("grid-layout") || "[]"
      );
      prevLayoutRef.current = savedLayout;
    }
  }, []);

  const handleSave = () => {
    const layoutChanged =
      JSON.stringify(layout) !== JSON.stringify(prevLayoutRef.current);

    if (layoutChanged) {
      navigate("/");
      prevLayoutRef.current = layout;
    } else {
      setShowAlert(true);
    }
  };

  const handleCancel = () => {
    localStorage.removeItem("grid-layout");
    layout.length = 0;
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-[#b9b7b7] shadow-md rounded-lg">
      {location.pathname === "/" && (
        <button className="btn border" onClick={() => navigate("/widgets")}>
          <FaEdit />
          Edit Dashboard
        </button>
      )}
      {location.pathname === "/widgets" && (
        <div className="flex gap-2">
          <button className="btn border-none" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn border-none" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}
      {showAlert && <WarningAlert text="Enter data to change" />}

      <div>LIQN</div>
    </nav>
  );
}
