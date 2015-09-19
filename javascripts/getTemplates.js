define(["hbs",
        "hbs!../templates/songs",
        "hbs!../templates/filteredArtists",
        "hbs!../templates/filteredAlbums",
        "hbs!../templates/filteredGenres"],
function(Handlebars, songTemplate, artistTemplate, albumTemplate, genreTemplate) {

  var templates = {};
  templates.songs = songTemplate;
  templates.artists = artistTemplate;
  templates.albums = albumTemplate;
  templates.genres = genreTemplate;

  return templates;
});
