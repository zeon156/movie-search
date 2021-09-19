import axios from "axios";

const apiUrl = "http://www.omdbapi.com";

const omdbApi = {
  getMories: async (q) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl}/?s=${q}`, {
          params: {
            apikey: process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          return resolve(response.data.Search);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default omdbApi;
