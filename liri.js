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
            // Place the response.data into a variable, jsonData.
            var jsonData = response.data;

            // showData ends up being the string containing the show data we will print to the console
            var artistData = [
                "Name of venue: " + jsonData.venue.name,
                "Venue location: " + jsonData.venue.city.country,
                "Date of the event: " + jsonData.datetime.moment().format('YYYY MM DD')

            ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
            fs.appendFile("log.txt", artistData + divider, function (err) {
                if (err) throw err;
                console.log(artistData);
            });
        });
    };



};


module.exports = Liri;
