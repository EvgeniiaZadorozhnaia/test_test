import { useState, useContext } from "react";
import styles from "./Toolbar.module.css";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { LayoutContext } from "../../context/context";
import { useLocation } from "react-router-dom";

export default function Toolbar() {
  const { layout, setLayout } = useContext(LayoutContext);
  const [dragging, setDragging] = useState(false);
  const location = useLocation();
  const isEditing = location.pathname === "/widgets";

  const updateLayout = (newLayout) => {
    setLayout((prevLayout) =>
      newLayout.map((item) => ({
        ...prevLayout.find((el) => el.i === item.i),
        ...item,
      }))
    );
  };
  
  const removeCard = (id) => {
    setLayout((prevLayout) => prevLayout.filter((item) => item.i !== id));
  };

  return (
    <div className={styles.toolbar_wrapper}>
      <GridLayout
        className={`${styles.layout}`}
        layout={layout}
        cols={12}
        rowHeight={100}
        width={1200}
        onLayoutChange={updateLayout}
        isResizable={isEditing}
        isDraggable={isEditing}
        bounds="parent"
        onDragStart={() => setDragging(true)}
        onDragStop={() => setDragging(false)}>
        {layout.map((item) => (
          <div
            key={item.i}
            className={`card shadow-lg bg-white ${styles.card}`}>
            <div>{item?.title}</div>
            {isEditing && (
              <button
                className={styles.close}
                onClick={() => removeCard(item.i)}>
                ✖
              </button>
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
