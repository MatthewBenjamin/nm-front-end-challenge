define(['knockout', 'youtube'], function(ko, youtube) {
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

            // pageToken is null for new searches
            var searchTerm = {
                query: searchInput,
                pageToken: searchPageToken,
            };
            // reset so new searches won't use previous pageToken
            self.searchPageToken(null);

            // if prevents empty search from executing
            if (searchInput) {
                youtube.requestVideos(searchTerm, videoResultsContainer,
                    metaResultsContainer, currentVideoSelection, errorMessageContainer);
            }
        });
    };

    return ViewModel;
});
