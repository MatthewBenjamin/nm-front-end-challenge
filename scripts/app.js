define(['jquery', 'knockout', 'youtube'], function($, ko, youtube) {
    var ViewModel = function(){
        var self = this;

        // query term
        self.searchInput = ko.observable();
        // youtube search pageToken
        self.searchPageToken = ko.observable();
        // Youtube Search Results Items - see videoResult.js
        self.videoResults = ko.observableArray();
        // Youtube search metadata - see api/youtube.js
        self.metaResults = ko.observable();
        // active item from self.videoResults
        self.currentVideoSelection = ko.observable();
        // Youtube API message
        self.errorMessage = ko.observable();

        // mobile UI
        self.mobileMenu = ko.observable(false);

        // toggle list display on small devices
        self.toggleMobileMenu = function() {
            if (self.mobileMenu()) {
                self.mobileMenu(false);
            } else {
                self.mobileMenu(true);
            }
        };

        // when self.searchInput or self.searchPageToken update,
        // submit API search request
        self.performSearch = ko.computed(function () {
            var searchInput = self.searchInput();
            var searchPageToken = self.searchPageToken();
            var videoResultsContainer = self.videoResults;
            var metaResultsContainer = self.metaResults;
            var currentVideoSelection = self.currentVideoSelection;
            var errorMessageContainer = self.errorMessage;
            var searchTerm = {};

            // next page in current search input
            if (searchInput && searchPageToken) {
                searchTerm.query = searchInput;
                searchTerm.pageToken = searchPageToken;
                self.searchPageToken(null);
                youtube.requestVideos(searchTerm, videoResultsContainer,
                    metaResultsContainer, currentVideoSelection, errorMessageContainer);
            // new search input
            } else if (searchInput) {
                searchTerm.query = searchInput;
                searchTerm.pageToken = null;
                youtube.requestVideos(searchTerm, videoResultsContainer,
                    metaResultsContainer, currentVideoSelection, errorMessageContainer);
            }
        });
    };

    return ViewModel;
});
