import React from "react";
import PropTypes from "prop-types";

export default function Button({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore} className="Button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
