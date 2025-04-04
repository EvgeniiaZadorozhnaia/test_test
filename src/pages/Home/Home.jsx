import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useContext } from 'react';
import { LayoutContext } from "../../context/context";

export default function Home() {
  const navigate = useNavigate();
  const { layout } = useContext(LayoutContext);

  return (
    <div className={styles.home_page}>
      {layout.length ? (
        <Toolbar />
      ) : (
        <>
          <div className={styles.info}>
            No widgets added yet
            <br />
            Click the button below to get started
          </div>
          <button className="btn border" onClick={() => navigate("/widgets")}>
            Edit Dashboard
          </button>
        </>
      )}
    </div>
  );
}
