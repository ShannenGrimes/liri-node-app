# liri-node-app
This is a siri like app

**Created By**: `Shannen Grimes`

- - -

## Introduction
LIRI is a Language Interpretation and Recognition Interface.  Liri-node-app is similar to iPhone SIRI.  This application is not voice driven, however, like SIRI.  This Liri-node-app works by using the command line.  The `Commands` are as follows:
   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

- - - 

## Video of Liri working
![](https://j.gifs.com/wVxJlg.gif)
[Click Here to Watch Video on YouTube](https://www.youtube.com/watch?v=XIsz4uQGeUQ)

## Setup

1.  Clone the repository.
2.  Run npm install to install the following packages:

      ### `npm install`
      - 
      | Module        | Descr                        | Link                                                            |
      | ------------- |:-------------:               | -----:                                                          |
      | Spotify       | Music search                 | [Spotify](https://developer.spotify.com/documentation/web-api/) |
      | Moment        | Formats Dates & Numbers      | [Moments](https://momentjs.com/docs/)                           |
      | Axios         | Supports Promise App         | [Axios](https://www.npmjs.com/package/axios)                    |
      | Dotenv        | Zero-dependency app          | [Dotenv](https://www.npmjs.com/package/dotenv)                  |

3. Open the `liri.js` file.
4. Outputs vary, according to user input parameters.
5. Results will popluate in the command line and search results are saved to the `log.txt` file.

## Command Line - Output Examples
### `concert-this`
### `node liri.js concert-this <name of artist or band>`
-
**Output**: A list of events and locations where the band is performing
![Results](/assets/images/concert-this-metallica.png)
-
### `spotify-this-song`
### `node liri.js spotify-this-song <name of song>`
-
**Output**: A list of artists that performs the song that was searched, along with album details
![Results](/assets/images/spotify-this-song-sugar.png)
-
### `movie-this`
### `node liri.js movie-this <name of movie>`
-
**Output**: Information about the movie will be displayed
![Results](/assets/images/movie-this-goonies.png)
-
### `do-what-it-says`
### `node liri.js do-what-it-says`
-
**Output**: Information from the random.txt file will be displayed and the associated command will be run
![Results](/assets/images/do-what-it-says.png)
- - -
## Technologies Used
1. Node.js
2. Axios
3. Javascript
4. OMDB API
5. Spotify
6. YouTube
7. Screencast O-Matic
8. Band in Town Events API
9. Rotten Tomatoes for movie ratings





