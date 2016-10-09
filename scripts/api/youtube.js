// youtube.js
define(['jquery'], function ($){
    var youtube = {};

    function makeRequestURL(searchTerm) {
        return 'https://www.googleapis.com/youtube/v3/search?part=snippet&' +
               'type=video&' +
               'key=AIzaSyA8B9NC0lW-vqhQzWmVp8XwEMFbyg01blI&' +
               'q=' + searchTerm;
    }

    youtube.requestVideos = function (searchTerm, resultsContainer) {
        var requestURL = makeRequestURL(searchTerm);

        var requestSettings = {
            success: function (data) {
                console.log(data);
                resultsContainer(data.items);
            },
            error: function () {
                // TODO: add error msg for user
                console.log('ERROR');
            },
            timeout: 8000,
        };
        $.ajax(requestURL, requestSettings);
    }

    return youtube;
});
