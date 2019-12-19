require("dotenv").config();

// Variables
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);
// User input
var userOptions = process.argv[2];
var inputParam = process.argv[3];

// Functions
userInput(userOptions, inputParam);

function userInput(userOptions, inputParam) {
  switch (userOptions) {
    case "concert-this":
      showConcert(inputParam);
      break;
    case "spotify-this-song":
      showSong(inputParam);
      break;
    case "movie-this":
      showMovie(inputParam);
      break;
    case "do-what-it-says":
      showWhat();
      break;
    default:
      console.log(
        "Invalid! Valid choices are: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says"
      );
  }
}

// Bands in Town
function showConcertInfo(inputParam) {
  var URL =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  request(URL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var concerts = JSON.parse(body);
      for (var i = 0; i < concerts.length; i++) {
        console.log("-----VENUE INFO-----");
        fs.appendFileSync("log.text", "-----VENUE INFO-----\n");
        console.log(i);
        fs.appendFileSync("log.text", i + "\n");
        console.log("Name of the Venue: " + concerts[i].venue.name);
        fs.appendFileSync(
          "log.txt",
          "Name of the Venue: " + concerts[i].venue.name + "\n"
        );
        console.log("Venue Location: " + concerts[i].venue.city);
        fs.appendFileSync(
          "log.txt",
          "Venue Location: " + concerts[i].venue.city + "\n"
        );
        console.log("Date of the Event: " + concerts[i].datetime);
        fs.appendFileSync(
          "log.txt",
          "Date of the Event: " + concerts[i].datetime + "\n"
        );
        console.log("----------");
        fs.appendFileSync("log.txt", "----------" + "\n");
      }
    } else {
      console.log("Error loading.  Please try again.");
    }
  });
}
// Spotify
function showSong(inputParam) {
    if (inputParam === undefined) {
        inputParam = "The Sign";
    }
    spotify.search(
        {
            type: "track",
            query: inputParam
        },
        function (error, data) {
            if (error) {
                console.log("Error loading song: " + err);
            }
        }
    )
}

//      * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")
