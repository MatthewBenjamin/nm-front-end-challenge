/*
function searchYoutube(searchTerm) {
    requestVideos(searchTerm);
}
*/

var ViewModel = function(){
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
    };

    var self = this;

    //self.searchInput = ko.observable();
    self.parseSearch = function(searchTerm) {
        //searchInput(searchTerm.query.value);
        requestVideos(searchTerm.query.value);
    }

    self.searchResults = ko.observableArray();
}

ko.applyBindings(ViewModel);