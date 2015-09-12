define(function () {
    return {
        getSongs: function (callback) {
            $.ajax({
              url: './songs.json'
            }).done(
            //send callback when finished executing
            function(JSONObject) {
              console.log("We got the songs", JSONObject);

              //execute the callback
              callback(JSONObject);
            });
        }
    };
});
