define(['jquery', 'knockout', 'youtube'], function($, ko, youtube) {
    var ViewModel = function(){
        var self = this;

        self.videoResults = ko.observableArray();
        self.metaResults = ko.observable();
        self.currentVideoSelection = ko.observable();

        // mobile UI
        self.mobileMenu = ko.observable(false);

        self.toggleMobileMenu = function() {
            if (self.mobileMenu()) {
                self.mobileMenu(false);
            } else {
                self.mobileMenu(true);
            }
        };

        self.parseSearch = function (searchInput) {
            var searchTerm = searchInput.query.value;
            var videoResultsContainer = self.videoResults;
            var metaResultsContainer = self.metaResults;
            var currentVideoSelection = self.currentVideoSelection;

            youtube.requestVideos(searchTerm, videoResultsContainer,
                metaResultsContainer, currentVideoSelection);
        };
    };

    return ViewModel;
});
