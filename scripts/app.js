define(['jquery', 'knockout', 'youtube'], function($, ko, youtube) {
    var ViewModel = function(){
        var self = this;

        self.searchInput = ko.observable();
        self.searchPageToken = ko.observable();
        self.videoResults = ko.observableArray();
        self.metaResults = ko.observable();
        self.currentVideoSelection = ko.observable();
        self.errorMessage = ko.observable();

        // mobile UI
        self.mobileMenu = ko.observable(false);

        self.toggleMobileMenu = function() {
            if (self.mobileMenu()) {
                self.mobileMenu(false);
            } else {
                self.mobileMenu(true);
            }
        };

        self.performSearch = ko.computed(function () {
            var searchInput = self.searchInput();
            var searchPageToken = self.searchPageToken();
            var videoResultsContainer = self.videoResults;
            var metaResultsContainer = self.metaResults;
            var currentVideoSelection = self.currentVideoSelection;
            var errorMessageContainer = self.errorMessage;
            var searchTerm;

            if (searchInput && searchPageToken) {
                searchTerm = 'q=' + searchInput + '&' +
                    'pageToken=' + searchPageToken;
                self.searchPageToken(null);
                youtube.requestVideos(searchTerm, videoResultsContainer,
                    metaResultsContainer, currentVideoSelection, errorMessageContainer);
            } else if (searchInput) {
                searchTerm = 'q=' + searchInput;
                youtube.requestVideos(searchTerm, videoResultsContainer,
                    metaResultsContainer, currentVideoSelection, errorMessageContainer);
            }
        });
    };

    return ViewModel;
});
