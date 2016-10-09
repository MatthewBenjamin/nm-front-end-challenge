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
        resultsList: 'kocomponents/results-list',
        metaResults: 'kocomponents/meta-results',
        currentVideoSelection: 'kocomponents/current-video-selection',
        // api
        youtube: 'api/youtube',
        videoResult: 'videoResult',
    },
});

// launch app w/ require dependencies
require(['knockout', 'app', 'searchForm'],
    function (ko, ViewModel, searchForm) {
    ko.components.register('search-form', { require: 'searchForm' });
    ko.components.register('results-list', { require: 'resultsList' });
    ko.components.register('meta-results', { require: 'metaResults' });
    ko.components.register('current-video-selection', { require: 'currentVideoSelection' });
    ko.applyBindings(ViewModel);
});
