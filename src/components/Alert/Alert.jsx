import { useContext, useEffect } from "react";
import { LayoutContext } from "../../context/context";
import styles from "./Alert.module.css";
import "animate.css";

const WarningAlert = () => {
  const { showAlert, setShowAlert } = useContext(LayoutContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) return null;

  return (
    <div
      className={`alert alert-warning shadow-lg animate__animated animate__fadeInRight ${styles.alert}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.502-1.276.732-2.012L13.732 4.988c-.77-.736-2.026-.736-2.796 0L4.35 16.988c-.77.736-.322 2.012.732 2.012z"
        />
      </svg>
      <span className="ml-2">Внесите данные для изменения</span>
      <button
        style={{ border: "none" }}
        onClick={() => setShowAlert(false)}
        className="top-1 right-2 text-lg text-black/50 hover:text-black">
        ✕
      </button>
    </div>
  );
};

export default WarningAlert;
