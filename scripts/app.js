define(['jquery', 'knockout'], function($, ko) {
    var ViewModel = function(){
        var self = this;

        self.searchResults = ko.observableArray();
    };

    return ViewModel;
});
