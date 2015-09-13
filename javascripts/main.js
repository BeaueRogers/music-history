require.config({
  baseUrl: "./javascripts",
  paths: {
      "jquery": "../lib/bower_components/jquery/dist/jquery.min",
      "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
    },
    shim : {
        "bootstrap":["jquery"]
    }
});

require(
  [
    "jquery",
    "hbs",
    "bootstrap",
    "populate-songs",
    "get-more-songs"
  ],
  function($, Handlebars, bootstrap, populateSongs, getMoreSongs) {

    populateSongs.getSongs(function(songs) {
      console.log("Binding initial", songs);
      require(["hbs!../templates/songs"], function(songTemplate) {
        $(".song-list").html(songTemplate(songs));
      });
    });

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

