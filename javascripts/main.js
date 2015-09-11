define(['jquery','populate-songs', 'get-more-songs', 'domacc', 'bootstrap'], function ($, populate, getMoreSongs, dom) {

    //$('.dropdown-toggle').dropdown();

    populate.getSongs(dom.makeSongList);

    $(".add-more").one('click', function () {
      getMoreSongs.getMore(dom.makeSongList);
    });

});
