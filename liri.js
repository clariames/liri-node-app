require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");


var Liri = function () {

    var divider = "\n------------------------------------------------------------\n\n";

    this.findConcert = function (artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var artistData = [
                "Name of venue: " + jsonData.venue.name,
                "Venue location: " + jsonData.venue.city.country,
                "Date of the event: " + jsonData.datetime.moment().format('YYYY MM DD')

            ].join("\n\n");

            fs.appendFile("log.txt", artistData + divider, function (err) {
                if (err) throw err;
                console.log(artistData);
            });
        });
    };

    this.findSong = function (spotify) {
        var URL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx';

        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var songData = [
                "Artist: " + jsonData.venue.name,
                "Song: " + jsonData.venue.city.country,
                "Spotify link: " + jsonData.datetime,
                "Album: " + jsonData.datetime

            ].join("\n\n");

            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        });
    };

    this.findMovie = function (movieName) {
        var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var songData = [
                "Title of the movie: " + jsonData.Title,
                "Year the movie came out: " + jsonData.Year,
                "IMDB Rating of the movie: " + jsonData.imdbRating,
                "Rotten Tomatoes Rating of the movie: " + jsonData.tomatoRating,
                "Country where the movie was produced: " + jsonData.Country,
                "Language of the movie: " + jsonData.Language,
                "Plot of the movie: " + jsonData.Plot,
                "Actors in the movie: " + jsonData.Actors
               

            ].join("\n\n");

            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        });
    };

    fs.readFile("rando.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
        var dataArr = data.split(",");
      
        console.log(dataArr);
      
      });


};


module.exports = Liri;
