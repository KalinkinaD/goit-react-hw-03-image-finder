import React from "react";
import ImageGalleryItem from "./imageGalleryItem";
import PropTypes from "prop-types";

export default function ImageGallery({ img, OpenModal }) {
  return (
    <ul className="ImageGallery">
      {img.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          OpenModal={() => OpenModal(largeImageURL)}
          alt={tags}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  OpenModal: PropTypes.func.isRequired,
  img: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
