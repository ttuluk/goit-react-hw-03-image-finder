import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props.props.hits);
    return (
      <ul className={styles.gallery}>
        <ImageGalleryItem images={this.props.props.hits} />
      </ul>
    );
  }
}
export { ImageGallery };
