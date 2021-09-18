import axios from "axios";

const apiUrl = "http://www.omdbapi.com";

const config = require("../config.json");

const omdbApi = {
  getMories: async (q) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl}/?s=${q}`, {
          params: {
            apikey: config.omdbApiKey,
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
