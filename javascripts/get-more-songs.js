define(function () {
    return {
        getMore: function (callback) {
            $.ajax({
              url: 'more-songs.json',
              dataType: "json",
            }).done(function(songs) {
              console.log("get-more-songs.js working");
              callback(songs);
            });
        }
    };
});
