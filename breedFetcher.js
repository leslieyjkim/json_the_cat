const request = require("request");

// const args = process.argv.slice(2);
// const search = args[0];

// const url = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

// request(url, (error, response, body) => {
//   if (error) {
//     console.error("Request Failed:", error);
//     return;
//   }

//   const data = JSON.parse(body);
//   if (data.length === 0) {
//     console.log("Breed Not Found");
//     return;
//   }

//   console.log(data[0].description);
// });

const fetchBreedDescription = function (search, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed Not Found", null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
