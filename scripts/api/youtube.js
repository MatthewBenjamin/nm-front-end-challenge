// youtube.js
define(['jquery'], function ($){
    var youtube = {};

    function makeRequestURL(searchTerm) {
        return 'https://www.googleapis.com/youtube/v3/search?part=snippet&' +
               'type=video&' +
               'key=AIzaSyA8B9NC0lW-vqhQzWmVp8XwEMFbyg01blI&' +
               'q=' + searchTerm;
    }

    function sortSnippets (snippetList) {
        snippetList.sort(function(a,b) {
          var snippetA = a.snippet.title.toUpperCase();
          var snippetB = b.snippet.title.toUpperCase();
          return (snippetA < snippetB) ? -1 : (snippetA > snippetB) ? 1 : 0;
        });
    }

    function parseResults (results) {
        sortSnippets(results.items);
        var videoResults = results.items;
        var metaResults = {
            nextPageToken: results.nextPageToken || null,
            prevPageToken: results.prevPageToken || null,
            pageInfo: {
                totalResults: results.pageInfo.totalResults || null,
                resultsPerPage: results.pageInfo.resultsPerPage || null,
            },
        };
        return {
            videoResults: videoResults,
            metaResults: metaResults,
        };
    }

    youtube.requestVideos = function (
        searchTerm, videoResultsContainer, metaResultsContainer) {

        var requestURL = makeRequestURL(searchTerm);

        var requestSettings = {
            success: function (data) {
                var results = parseResults(data)
                videoResultsContainer(results.videoResults);
                metaResultsContainer(results.metaResults);
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
