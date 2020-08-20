import React, { Component } from "react";
import propTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    onClose: propTypes.func.isRequired,
    src: propTypes.string.isRequired,
  };

  state = {};

  componentWillMount() {
    window.addEventListener("keydown", this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeOnEsc);
  }

  closeOnEsc = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  handleClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };
  render() {
    const { src } = this.props;
    return (
      <div className="Overlay" onClick={this.handleClose}>
        <div className="Modal">
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}
