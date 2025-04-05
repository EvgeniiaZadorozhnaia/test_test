import React from "react";
import Widget from "../Widget/Widget";
import styles from "./ManageWidgets.module.css";

export default function ManageWidgets() {
  const widgets = [
    { id: 1, title: "Task Projects" },
    { id: 2, title: "Open Tasks" },
    { id: 3, title: "New Tasks" },
    { id: 4, title: "Due Today" },
    { id: 5, title: "Due This Week" },
    { id: 6, title: "Overdue Tasks" },
    { id: 7, title: "Red Flag Tasks" },
    { id: 8, title: "Delay Project Completion" },
    { id: 9, title: "Open Tasks by Health" },
    { id: 10, title: "Task Comments" },
    { id: 11, title: "Task Attachments" },
    { id: 12, title: "Task Links" },
    { id: 13, title: "Task Tags" },
    { id: 14, title: "Task Custom Fields" },
  ];

  return (
    <section className={styles.manage_widgets}>
      <h1 className="text-5xl mb-4">Manage Widgets</h1>
      <div className={styles.widgets}>
        {widgets.map((widget) => (
          <Widget key={widget.id} title={widget.title} />
        ))}
      </div>
    </section>
  );
}
