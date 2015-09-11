define(['jquery','populate-songs', 'get-more-songs', 'domacc', 'bootstrap'],
function ($, populate, getMoreSongs, dom, boot) {

    $('.song-list').dropdown();

    populate.getSongs(dom.makeSongList);

    $(".add-more").one('click', function () {
      getMoreSongs.getMore(dom.makeSongList);
    });

});
