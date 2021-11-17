import "./App.css";
import React, { Component } from "react";
import imageApi from "./services/api";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import SearcBar from "./components/Searchbar/Searchbar";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class App extends Component {
  state = {
    imageElem: null,
    error: null,
    status: Status.IDLE,
    showModal: false,
  };
  componentDidMount() {
    console.log(this.props);
    const name = "cat";
    imageApi
      .fetchImage(name)
      .then((imageElem) =>
        this.setState({ imageElem, status: Status.RESOLVED })
      )
      .catch((error) => this.setState({ error, status: Status.REJECTED }));
  }

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal, imageElem } = this.state;
    return (
      <div className="App">
        <SearcBar />
        {imageElem && <ImageGallery props={imageElem} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt=""></img>
            <Button onClickOpen={this.toggleModal} title={"Close Modal"} />
          </Modal>
        )}
        <Button onClickOpen={this.toggleModal} title={"Open Modal"} />
      </div>
    );
  }
}

export default App;
