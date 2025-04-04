import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LayoutContext } from "../../context/context";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { layout } = useContext(LayoutContext);

  const handleSave = () => {
    if (layout.length > 0) {
      navigate("/");
    }
  };

  const handleCancel = () => {
    localStorage.removeItem("layout");
    layout.length = 0;
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-[#b9b7b7] shadow-md rounded-lg">
      {location.pathname === "/" && (
        <button className="btn" onClick={() => navigate("/widgets")}>
          <FaEdit />
          Edit Dashboard
        </button>
      )}
      {location.pathname === "/widgets" && (
        <div className="flex gap-2">
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}

      <div>LIQN</div>
    </nav>
  );
}
