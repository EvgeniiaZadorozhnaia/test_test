import React from "react";
import styles from "./Widget.module.css";
import { useContext } from "react";
import { LayoutContext } from "../../context/context";

export default function Widget({ title }) {
  const { layout, setLayout } = useContext(LayoutContext);
  const isAdded = layout.some((item) => item.title === title);

  const addCard = () => {
    if (isAdded) {
      return;
    }

    const newCard = {
      i: `${Date.now()}`,
      x: 0,
      y: 0,
      w: 4,
      h: 2,
      title,
    };

    setLayout((prevLayout) => {
      const updatedLayout = [...prevLayout, newCard];
      return updatedLayout;
    });
  };

  const removeCard = () => {
    setLayout((prevLayout) =>
      prevLayout.filter((item) => item.title !== title)
    );
  };

  return (
    <div className={`${styles.widget} ${isAdded ? styles.added : ""}`}>
      <p>{title}</p>
      <button
        className="btn btn-outline"
        onClick={isAdded ? removeCard : addCard}>
        {isAdded ? "Remove" : "Add"}
      </button>
    </div>
  );
}
