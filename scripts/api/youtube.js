// youtube.js
define(['jquery', 'videoResult'], function ($, videoResult){
    var youtube = {};

    // create API request URI from query term & search pageToken
    function makeRequestUri(queryObject) {
        var pageTokenTerm =
            queryObject.pageToken ? '&pageToken=' + queryObject.pageToken : "";
        return 'https://www.googleapis.com/youtube/v3/search?part=snippet&' +
               'type=video&' +
               'key=AIzaSyA8B9NC0lW-vqhQzWmVp8XwEMFbyg01blI&' +
               'q=' + queryObject.query + pageTokenTerm;
    }

    // TODO: refactor into general alphabatize, move into util library
    function sortSnippets (snippetList) {
        snippetList.sort(function(a,b) {
            var snippetA = a.snippet.title.toUpperCase();
            var snippetB = b.snippet.title.toUpperCase();
            return (snippetA < snippetB) ? -1 : (snippetA > snippetB) ? 1 : 0;
        });
    }

    // create videoResult object from results list - see ../videoResult.js
    function parseVideoResults(videoList) {
        sortSnippets(videoList);
        var videoResults = [];
        videoList.forEach(function(result) {
            videoResults.push(new videoResult(result));
        });

        return videoResults;
    }

    // create search metadata
    function parseMetadata(results) {
        return {
            nextPageToken: results.nextPageToken || null,
            prevPageToken: results.prevPageToken || null,
            totalResults: results.pageInfo.totalResults || null,
            resultsPerPage: results.pageInfo.resultsPerPage || null,
        };
    }

    function parseResults (results) {
        var videoResults = parseVideoResults(results.items);
        var metaResults = parseMetadata(results);

        return {
            videoResults: videoResults,
            metaResults: metaResults,
        };
    }

    // submit youtube video search request
    youtube.requestVideos = function (
        searchTerm,
        videoResultsContainer,
        metaResultsContainer,
        currentVideoSelection,
        errorMessageContainer) {

        var requestUri = makeRequestUri(searchTerm);

        var requestSettings = {
            success: function (data) {
                var results = parseResults(data);
                videoResultsContainer(results.videoResults);
                metaResultsContainer(results.metaResults);
                currentVideoSelection(videoResultsContainer()[0]);
            },
            error: function () {
                errorMessageContainer(
                    'Sorry, there was an error in loading your results');
            },
            timeout: 8000,
        };
        $.ajax(requestUri, requestSettings);
    };

    return youtube;
});
