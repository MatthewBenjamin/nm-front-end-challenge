define(['jquery', 'knockout'], function($, ko) {
    var ViewModel = function(){
        var self = this;

        self.videoResults = ko.observableArray();
        self.metaResults = ko.observable();
    };

    return ViewModel;
});
