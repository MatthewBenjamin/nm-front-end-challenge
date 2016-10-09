define(['jquery', 'knockout'], function($, ko) {
    ko.components.register('search-form', { require: 'searchForm' });

    function requestVideos (searchTerm) {
        console.log('requesting vids...');
        var requestURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&' +
            'type=video&' +
            'key=AIzaSyA8B9NC0lW-vqhQzWmVp8XwEMFbyg01blI&' +
            'q=' + searchTerm;
        var requestSettings = {
            success: function (data) {
                console.log(data);
                self.searchResults(data.items);
            },
            error: function () {
                console.log('ERROR');
            },
            timeout: 8000,
        };

        $.ajax(requestURL, requestSettings);
    }

    var ViewModel = function(){
        var self = this;

        self.searchTerm = ko.observable();
        self.initSearch = ko.computed(function(){
            if (self.searchTerm()) {
                requestVideos(self.searchTerm());
            }
        });

        self.searchResults = ko.observableArray();
    };

    return ViewModel;
});
