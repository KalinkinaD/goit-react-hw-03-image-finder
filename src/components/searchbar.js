import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBar extends Component {
  static propTypes = {
    state: PropTypes.shape({
      inputValue: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
