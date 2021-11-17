import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export default class SearcBar extends Component {
  state = {
    searchName: "",
  };

  handleClick = (event) => {
    const { value } = event.currentTarget;
    this.setState(() => {
      return { searchName: value };
    });
  };

  handleSubmite = (e) => {
    e.preventDefault();
    this.props = { ...this.state.searchName };
    this.reset();
  };

  reset = () => {
    this.setState({ searchName: "" });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmite}>
          <button type="submit" className={styles.form_button}>
            <span className={styles.button_label}>Search</span>
          </button>

          <input
            className={styles.button_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onClick={this.handleClick}
          />
        </form>
      </header>
    );
  }
}
