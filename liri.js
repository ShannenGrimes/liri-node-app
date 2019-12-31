require("dotenv").config();

// Variables
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);
var moment = require("moment");
moment().format();
var axios = require("axios");
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
      showSomeInfo(inputParam);
      break;
    default:
      console.log(
        "Invalid! Valid choices are: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says"
      );
  }
}

// Bands in Town
function showConcert(inputParam) {
  var queryURL = (
    "https://rest.bandsintown.com/artists/" +
      inputParam +
      "/events?app_id=codingbootcamp"
  );
  request(queryURL, function(err, response, body) {
    if (!err && response.statusCode === 200) {

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
      console.log("err loading.  Please try again.");
    }
  });
}
// Spotify Song Search
function showSong(inputParam) {
  if (inputParam === undefined) {
    inputParam = "The Sign";
  }
  spotify.search(
    {
      type: "track",
      query: inputParam
    },
    function(err, data) {
      if (err) {
        console.log("err loading song: " + err);
        return;
      }
      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log("-----SONG INFO-----");
        fs.appendFileSync("log.txt", "-----SONG INFO-----\n");
        console.log(i);
        fs.appendFileSync("log.txt", i + "\n");
        console.log("Artist(s): " + songs[i].artists[0].name);
        fs.appendFileSync(
          "log.txt",
          "artist(s): " + songs[i].artists[0].name + "\n"
        );
        console.log("Song name: " + songs[i].name);
        fs.appendFileSync("log.txt", "song name: " + songs[i].name + "\n");
        console.log("Preview song: " + songs[i].preview_url);
        fs.appendFileSync(
          "log.txt",
          "preview song: " + songs[i].preview_url + "\n"
        );
        console.log("Album: " + songs[i].album.name);
        fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
        console.log("----------");
        fs.appendFileSync("log.txt", "----------\n");
      }
    }
  );
}

// Movie Search from OMDB
function showMovie(inputParam) {
  if (inputParam === undefined) {
    inputParam = "Mr. Nobody";
    console.log("----------");
    fs.appendFileSync("log.txt", "----------\n");
    console.log(
      "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/"
    );
    fs.appendFileSync(
      "log.txt",
      "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" +
        "\n"
    );
    console.log("It's on Netflix!");
    fs.appendFileSync("log.txt", "It's on Netflix!\n");
  }
  var queryUrl =
    "http://www.omdbapi.com/?t=" + inputParam + "&y=&plot=short&apikey=trilogy";
  request(queryUrl, function(err, response, body) {
    if (!err && response.statusCode === 200) {
      var movies = JSON.parse(body);
      console.log("-----MOVIE INFO-----");
      fs.appendFileSync("log.txt", "-----MOVIE INFO-----\n");
      console.log("Title: " + movies.Title);
      fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
      console.log("Release Year: " + movies.Year);
      fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
      console.log("IMDB Rating: " + movies.imdbRating);
      fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
      console.log(
        "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies)
      );
      fs.appendFileSync(
        "log.txt",
        "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies) + "\n"
      );
      console.log("Country of Production: " + movies.Country);
      fs.appendFileSync(
        "log.txt",
        "Country of Production: " + movies.Country + "\n"
      );
      console.log("Language: " + movies.Language);
      fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
      console.log("Plot: " + movies.Plot);
      fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
      console.log("Actors: " + movies.Actors);
      fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
      console.log("----------");
      fs.appendFileSync("log.txt", "----------\n");
    } else {
      console.log("err occurred.");
    }
  });
}
// Rotten Tomatoes Rating
function getRottenTomatoesRatingObject(data) {
  return data.Ratings.find(function(item) {
    return item.Source === "Rotten Tomatoes";
  });
}

function getRottenTomatoesRatingValue(data) {
  return getRottenTomatoesRatingObject(data).Value;
}

// Reading from random.txt file
function showSomeInfo() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var dataArr = data.split(",");
    UserInput(dataArr[1]);
  });
}
