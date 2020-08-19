import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import ImageGallery from "./components/imageGallery";
import Button from "./components/button";

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

  render() {
    const { img, loading, total } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery img={img} />
        {loading && (
          <Loader
            type="Hearts"
            color="pink"
            height={80}
            width={80}
            timeout={5000} //5 secs/>}
          />
        )}
        {img.length > 0 && !loading && img.length !== total && (
          <Button onLoadMore={this.fetchImage} />
        )}
      </>
    );
  }
}

export default App;
