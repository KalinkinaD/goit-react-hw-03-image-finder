import axios from "axios";

const imgService = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=17307433-b3b18b1a01ee5cc066151defb`
    )
    .then((response) => response.data.hits);
};

export default {
  imgService,
};
