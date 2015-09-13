define(function () {
    return {
        getMore: function (callback) {
          console.log("get-more-songs.js running");
            $.ajax({
              url: './more-songs.json'
            }).fail(
            //console.log(".done is working");
            function(songs) {
              console.log('get-more-songs.js is "working"', songs);
              callback(songs);
            });
        }
    };
});


//dataType: "json", under URL
