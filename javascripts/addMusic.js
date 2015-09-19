requirejs.config({
  baseUrl: "./javascripts",
  paths: {
      "jquery": "../lib/bower_components/jquery/dist/jquery.min",
      "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
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
  ["jquery", "hbs",
   "bootstrap", "material", "addMusic"],
  function($, Handlebars, bootstrap, material, addMusic) {
    var selectedArtist = "", selectedAlbum = "", selectedYear = "";

  $("#addSong").click(function() {

    var newSong = {
      "name": $("#songName").val(),
      "artist": $("#artistName").val(),
      "genre": $("#genreName").val(),
      "album": {
        "name": $("#albumName").val(),
        "year": parseInt($("#albumYear").val(), 10)
      }
    };

    $.ajax({
      url: "https://music-history-beau.firebaseio.com/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your new song is", addedSong);
      $("#additionSuccess").append("You've added the song " + $("#songName").val() + " to FYAAAHBAES!");
    });
  });
});


