define(function () {
    return {
        getSongs: function (callback) {
            $.ajax({
              url: 'https://music-history-beau.firebaseio.com/.json'
            }).done(
            function(songs) {
              //console.log("We got the songs", songs);
              callback(songs);
            });
        }
    };
});

//url: "https://music-history-beau.firebaseio.com/"
