// videoResult.js
define(['knockout'], function(ko) {
    var videoResult = function(videoSnippet) {
        this.videoId = ko.observable(videoSnippet.id.videoId);
        this.channelId = ko.observable(videoSnippet.snippet.channelId);
        this.channelTitle = ko.observable(videoSnippet.snippet.channelTitle);
        this.description = ko.observable(videoSnippet.snippet.description);
        this.publishedAt = ko.observable(videoSnippet.snippet.publishedAt);
        this.thumbnails = ko.observable(videoSnippet.snippet.thumbnails);
        this.title = ko.observable(videoSnippet.snippet.title);
        /* snippet:
        .channelId #string
        .channelTitle #string
        .description #string
        .publishedAt #time string
        .thumbnails = {
            default: {
                height: #int
                width: #int
                url: #string
            },
            high: {},
            medium: {},
        }
        .title #string

        */
    };

    return videoResult;
});