axios = require("axios")

var searchTerm = "";
var type = process.argv[2]

console.log(process.argv)
console.log(type)
console.log(searchTerm)

function search() {
    for (i = 3; i < process.argv.length; i++) {
        searchTerm = searchTerm + " " + process.argv[i]

    }
};

search();

console.log(searchTerm)

switch (type) {
    case "movie":
        searchMovie()
        break;

    case "song":
        searchSong()
        break;

    case "band":
        searchBand()
        break;

    default:
        break;
}



function searchMovie() {
console.log(searchMovie)
    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";



    console.log(queryUrl);


    axios.get(queryUrl)

        .then(
            function (response) {
                // console.log(response)
                console.log(response.data.Year)

                console.log("The movie's rating is: " + response.data.imdbRating);
            })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}


function searchBand() {
    console.log(searchBand)
 var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

//api key 93247180c8ca02658897db5d90e93464

    console.log(queryUrl);


    axios.get(queryUrl)

        .then(
            function (response) {
                console.log(response.data.year)
             



            })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}


function searchSong() {
console.log(searchSong)

    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";



    console.log(queryUrl);


    axios.get(queryUrl)

        .then(
            function (response) {
                console.log(response.data.Year)
             
            })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
