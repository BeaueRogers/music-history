define(function () {
    return {
        getMore: function (callback) {
            $.ajax({
              url: 'moreSongs.json',
              dataType: "json",
            }).done(function(songs) {
              callback(songs.songs);
            });
        }
    };
});
