define(function () {
    return {
        getSongs: function (callback) {
            $.ajax({
              url: 'songs.json',
              dataType: "json",
            }).done(function(JSONObject) {
              dom.makeSongList(JSONObject.songs);
            });
        }
    };
});
