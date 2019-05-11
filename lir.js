var Liri = require("./liri");
var liri = new Liri();

var search = process.argv[2];

var field = process.argv.slice(3).join(" ");



if (search === "concert-this") {
    console.log("Searching for artist");
    liri.findConcert(field);
}
else if (search === "spotify-this-song") {
    console.log("Searching for song");
    liri.findSong(field);
} 
else if (search === "movie-this") {
    console.log("Searching for movie");
    liri.findMovie(field);
} 

else {
    liri.readFile;
    console.log("Random");
}


