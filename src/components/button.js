import React from "react";

export default function Button({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore} className="Button">
      Load more
    </button>
  );
}
