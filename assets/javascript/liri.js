require("dotenv").config();

// Variables
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var spotify = require ('node-spotify-api');
var spotify = new spotify(keys.spotify);
// User input
var userOptions = process.argv[2];
var inputParam = process.argv[3];

// Functions
userInput(userOptions, inputParam);

function userInput(userOptions, inputParam) {
    switch (userOptions) {
        case 'concert-this':
            showConcert(inputParam);
            break;
        case 'spotify-this-song':
            showSong(inputParam);
            break;
        case 'movie-this':
            showMovie(inputParam);
            break;
        case 'do-what-it-says':
            showWhat();
            break;
        default:
            console.log("Invalid! Valid choices are: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}

// User input
userInput(userOptions, inputParam);

// Functions for bands in town
function showConcert(inputParam)