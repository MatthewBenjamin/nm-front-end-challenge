requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min',
        ],
        knockout: [
            'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
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
require(['knockout', 'app'],
    function (ko, ViewModel) {
        ko.components.register('search-form', { require: 'searchForm' });
        ko.components.register('results-list', { require: 'resultsList' });
        ko.components.register('meta-results', { require: 'metaResults' });
        ko.components.register('current-video-selection', { require: 'currentVideoSelection' });
        ko.applyBindings(ViewModel);
    });
