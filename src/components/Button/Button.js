import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClickOpen }) => {
  return (
    <>
      <button type="button" className={styles.button} onClick={onClickOpen}>
        {title}
      </button>
    </>
  );
};
export default Button;
