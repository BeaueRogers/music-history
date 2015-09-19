requirejs.config({
  baseUrl: "./javascripts",
  paths: {
      "jquery": "../lib/bower_components/jquery/dist/jquery.min",
      'firebase': '../lib/bower_components/firebase/firebase',
      "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
      "lodash": "../lib/bower_components/lodash/lodash.min",
      "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min"
    },
    shim : {
      'bootstrap':['jquery'],
      'material': ['bootstrap'],
      'firebase': {
        exports: 'Firebase'
      }
    }
});

requirejs(
  ["jquery", "lodash", "firebase", "hbs",
   "bootstrap", "material", "getUnique",
   "getTemplates", "eventHandlers"],
  function($, _, _firebase, Handlebars, bootstrap, material, unique, templates, eventHandlers) {
    var allSongsObject = {};
    var allSongsArray = [];
    var originalSongsArray = [];

    // Initialize the event handlers
    eventHandlers.init({songArray: originalSongsArray});

    // Create a reference to your Firebase database
    var myFirebaseRef = new Firebase("https://music-history-beau.firebaseio.com/");

    // Listen for when anything changes on the "songs" key
    myFirebaseRef.child("songs").on("value", function(snapshot) {

      // Store the entire songs key in a local variable
      var songs = snapshot.val();

      // Empty out the module-level song array
      allSongsArray = [];

      // Convert Firebase's object of objects into an array of objects
      for (var key in songs) {
        allSongsArray[allSongsArray.length] = songs[key];
      }

      // Now create my base object that will get bound to the
      // song list Handlebar template (Handlebar templates
      // always need objects)
      allSongsObject = { songs: allSongsArray };

      /*
        Create a copy of the allSongsArray so that when
        the user clicks the "Clear Filter" button, we can
        set it back to the original data.
       */
      originalSongsArray = allSongsArray.slice();

      // Bind the song object to the song list template
      $("#list-of-songs").html(templates.songs(allSongsObject));

      // Make an array of unique artist names
      var uniqueArtists = unique(allSongsArray).uniqueArtists;

      // Bind the unique artists to the filteredArtists template
      $("#artists").html(templates.artists({artists:uniqueArtists }));

      // Make an array of unique album names
      var uniqueAlbums = unique(allSongsArray).uniqueAlbums;

      // Bind the unique albums to the filteredAlbums template
      $("#albums").html(templates.albums({albums:uniqueAlbums }));

      // Make an array of unique genre names
      var uniqueGenres = unique(allSongsArray).uniqueGenres;

      // Bind the unique genres to the filteredGenres template
      $("#genres").html(templates.genres({genres:uniqueGenres }));
      // Update event handlers with new data
      eventHandlers.updateSongs(originalSongsArray);

    });

    // Initialize the Material Bootstrap plugin
    $.material.init();

  }
);
/*
function($, Handlebars, bootstrap, populateSongs, getMoreSongs, unique, firebase) {

    populateSongs.getSongs(function(songs) {
      //console.log("Binding primary", songs);
      require(["hbs!../templates/songs"], function(songTemplate) {
        $(".song-list").html(songTemplate(songs));
      });
    }); */

   /* removed button

   $(".btn").on("click", function() {
      console.log("initial click confirmed");
      getMoreSongs.getMore(function(songs) {
        console.log("Binding secondary", songs);
        require(["hbs!../templates/songs"], function(songTemplate) {
          console.log("hbs template loaded");
        $(".add-more").html(songTemplate(songs));
        });
      });
    });
  });

      //$(".add-more").one("click", function () {

        //getMoreSongs.getMore(function(songs) {
          //populateSongs.getSongs(function(songs) {

            */

