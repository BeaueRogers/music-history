/*require(['jquery', 'bootstrap', 'populate-songs', 'get-more-songs'],
function ($, bootstrap, populate, getMoreSongs) {
  var moreSongsLoaded = false;
  console.log("asking initial songs module for songs array");

    $('.song-list').done();

    populate.getSongs(function(songs) {
      console.log(songs);
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song-list").html(songTemplate(songs));
      });
    });

    $(".add-more").one('click', function () {
      getMoreSongs.getMore(dom.makeSongList);
    });

}); */
