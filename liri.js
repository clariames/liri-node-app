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

    this.findMovie = function (spotify) {
        var URL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx';

        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var songData = [
                "Artist: " + jsonData.artist,
                "Song: " + jsonData.song,
                "Spotify link: " + jsonData.url,
                "Album: " + jsonData.album

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
