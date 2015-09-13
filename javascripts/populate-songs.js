define(function () {
    return {
        getSongs: function (callback) {
            $.ajax({
              url: './songs.json'
            }).done(
            function(songs) {
              console.log("We got the songs", songs);
              callback(songs);
            });
        }
    };
});
