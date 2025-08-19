import "../styles/modalWindow.css";
import { useState } from "react";

export default function ModalWindow({ isOpen, onClosed, children }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClosed();
    }, 300);
  };

  return (
    isOpen && (
      <div
        className={`modal-wrapper ${isExiting ? "fade-out" : ""}`}
        onClick={handleClose}
      >
        <div
          className={`modal-content-wrapper ${
            isExiting ? "slide-out" : "slide-in"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">{children}</div>
          <button
            className="modal-close-button"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            x
          </button>
        </div>
      </div>
    )
  );
}