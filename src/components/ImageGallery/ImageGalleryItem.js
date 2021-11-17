import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map((image) => {
        return (
          <li key={image.id} className={styles.gallery_item}>
            <img
              src={image.pageURL}
              alt={image.id}
              className={styles.item_image}
            />
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
