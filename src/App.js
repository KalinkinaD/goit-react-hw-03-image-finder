import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import ImageGallery from "./components/imageGallery";
import Button from "./components/button";
import Modal from "./components/modal";
import Notification from "./components/notification";

import Loader from "react-loader-spinner";

import imgService from "./services/pixabayApi";

class App extends Component {
  state = {
    img: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageUrl: null,
    total: 0,
    isModalOpen: false,
    modalUrl: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImage();
    }
  }

  fetchImage = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imgService
      .imgService(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          img: [...prevState.img, ...images],
          page: prevState.page + 1,
          total: images.total,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      img: [],
    });
  };

  openModal = (e) => {
    const fullImg = e.target.dataset.modal;
    this.setState({ isModalOpen: true, modalUrl: fullImg });
  };

  closeModal = (e) => {
    this.setState({ isModalOpen: false, modalUrl: " " });
  };

  handleModal = (url) => {
    this.setState({ modalUrl: url, isModalOpen: true });
  };

  render() {
    const { img, loading, total, isModalOpen, modalUrl, error } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {error && (
          <Notification message={`We have a problem: ${error.message}`} />
        )}
        <ImageGallery img={img} OpenModal={this.handleModal} />
        {loading && (
          <Loader
            type="Hearts"
            color="pink"
            height={80}
            width={80}
            timeout={5000} //5 secs/>}
          />
        )}
        {isModalOpen && <Modal src={modalUrl} onClose={this.closeModal} />}
        {img.length > 0 && !loading && img.length !== total && (
          <Button onLoadMore={this.fetchImage} />
        )}
      </>
    );
  }
}

export default App;
