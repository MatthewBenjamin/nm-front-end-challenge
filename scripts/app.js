define(['jquery', 'knockout', 'youtube'], function($, ko, youtube) {
    var ViewModel = function(){
        var self = this;

        self.videoResults = ko.observableArray();
        self.metaResults = ko.observable();

        self.parseSearch = function (searchInput) {
            var searchTerm = searchInput.query.value;
            var videoResultsContainer = self.videoResults;
            var metaResultsContainer = self.metaResults;
            youtube.requestVideos(searchTerm, videoResultsContainer, metaResultsContainer);
        };
    };

    return ViewModel;
});
