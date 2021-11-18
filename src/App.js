import "./App.css";
import React, { Component } from "react";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import SearcBar from "./components/Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    searchName: "",
  };

  handleFormSubmit = (searchName) => {
    this.setState({ searchName });
  };

  render() {
    const { searchName } = this.state;
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <SearcBar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={searchName} />
      </div>
    );
  }
}

export default App;
