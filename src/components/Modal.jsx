import { useDispatch } from "react-redux";
import { triggerHintModal } from "../actions/quizActions";
import { motion } from "framer-motion";

const Modal = ({ content }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    const modalObject = { open: false, content: null };
    dispatch(triggerHintModal(modalObject));
  };

  return (
    <div className="modal-container">
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <motion.div
          className="modal"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
        >
          <button
            style={{
              position: "absolute",
              top: 5,
              right: 8,
              background: "transparent",
              border: "none",
              fontSize: "2rem",
            }}
            onClick={handleClose}
          >
            X
          </button>
          <h3
            style={{ textAlign: "center", marginTop: "10px", fontSize: "2rem" }}
          >
            Hint
          </h3>
          <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>{content}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
