define(function () {
    return {
        getMore: function (callback) {
            $.ajax({
              url: 'more-songs.json',
              dataType: "json",
            }).done(function(songs) {
              callback(songs.songs);
            });
        }
    };
});
