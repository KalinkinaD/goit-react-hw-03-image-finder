import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "./imageGallery";

const ImageGalleryItem = ({ url, alt, OpenModal }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={url}
          alt={alt}
          onClick={OpenModal}
          className="ImageGalleryItem-image"
        />
      </li>
    </>
  );
};

ImageGallery.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  OpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
