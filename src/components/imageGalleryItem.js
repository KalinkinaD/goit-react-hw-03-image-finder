import React from "react";

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

export default ImageGalleryItem;
