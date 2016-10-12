// videoResult.js - Youtube Search Result: Item
define(['knockout'], function(ko) {
    function parseDate(dateinfo) {
        var dateObj = new Date(dateinfo);
        return dateObj.toLocaleDateString();
    }

    function makeVideoUri(videoId) {
        return 'https://www.youtube.com/watch?v=' + videoId;
    }

    function makeChannelUri(channelId) {
        return 'https://www.youtube.com/channel/' + channelId;
    }

    // search result item object
    var videoResult = function(videoSnippet) {
        this.videoLink = ko.observable(makeVideoUri(videoSnippet.id.videoId));
        this.channelLink = ko.observable(makeChannelUri(videoSnippet.snippet.channelId));
        this.channelTitle = ko.observable(videoSnippet.snippet.channelTitle);
        this.description = ko.observable(videoSnippet.snippet.description);
        this.dateInfo = ko.observable(new Date(videoSnippet.snippet.publishedAt));
        this.publishDate = ko.observable(parseDate(videoSnippet.snippet.publishedAt));
        this.smallThumbnail = ko.observable(videoSnippet.snippet.thumbnails.default.url);
        this.mediumThumbnail = ko.observable(videoSnippet.snippet.thumbnails.medium.url);
        this.title = ko.observable(videoSnippet.snippet.title);
    };

    return videoResult;
});