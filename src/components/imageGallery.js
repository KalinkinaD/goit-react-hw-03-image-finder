import React from "react";
import ImageGalleryItem from "./imageGalleryItem";

export default function ImageGallery({ img, OpenModal }) {
  return (
    <ul className="ImageGallery">
      {img.map(({ objectId, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={objectId}
          url={webformatURL}
          OpenModal={() => OpenModal(largeImageURL)}
          alt={tags}
        />
      ))}
    </ul>
  );
}
