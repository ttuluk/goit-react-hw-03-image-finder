import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal didMount");
    console.log(this.props);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate() {
    console.log("Modal didUpdate");
  }
  componentWillUnmount() {
    console.log("Modal willUnmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <>
        <div className={styles.Overlay} onClick={this.handleOverlayClick}>
          <div className={styles.Modal}>{this.props.children}</div>
        </div>
      </>,
      modalRoot
    );
  }
}
