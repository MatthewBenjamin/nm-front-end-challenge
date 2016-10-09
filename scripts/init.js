requirejs.config({
    baseUrl: 'scripts',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min',
            //'./libraries/jquery-2.1.3.min',
        ],
        knockout: [
            'http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0',
            //'./libraries/knockout-3.3.0',
        ],
        app: 'app',
        // kocomponents
        searchForm: 'kocomponents/search-form',
        // api
        youtube: 'api/youtube',
        videoResult: 'videoResult',
    },
});

// launch app w/ require dependencies
require(['knockout', 'app', 'searchForm'],
    function (ko, ViewModel, searchForm) {
    ko.components.register('search-form', { require: 'searchForm' });
    ko.applyBindings(ViewModel);
});