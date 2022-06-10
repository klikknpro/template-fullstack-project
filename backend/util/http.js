const { default: axios } = require("axios");

const http = (baseUrl) => {
  const instance = axios.create({
    baseURL: "",
    timeout: 3000,
  });

  const post = async (...params) => {
    try {
      const response = await instance.post(...params);
      return response;
    } catch (err) {
      console.log(err);
      return err.reponse;
    }
  };
  return { post, _instance: instance }; // _private_stuff
};

module.exports = http();

/*

*/
