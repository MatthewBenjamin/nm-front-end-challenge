requirejs.config({
    baseUrl: '../scripts',
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min',
        ],
        knockout: [
            'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        ],
        // ko ViewModels
        app: 'app',
        videoResult: 'videoResult',
        // ko components
        searchForm: 'kocomponents/search-form',
        resultsList: 'kocomponents/results-list',
        metaResults: 'kocomponents/meta-results',
        currentVideoSelection: 'kocomponents/current-video-selection',
        // api
        youtube: 'api/youtube',
        // jasmine
        jasmine: '../tests/lib/jasmine-2.5.2/jasmine',
        jasmineHtml: '../tests/lib/jasmine-2.5.2/jasmine-html',
        jasmineBoot: '../tests/lib/jasmine-2.5.2/boot',
        // jasmine specs
        viewmodelSpecs: '../tests/spec/viewmodel-specs',
        youtubeSpecs: '../tests/spec/youtube-specs',
    },
    shim: {
        jasmineHtml: {
            deps: ['jasmine'],
        },
        jasmineBoot: {
            deps: [
                'jasmine',
                'jasmineHtml'
            ],
        }
    }
});

// launch app w/ require dependencies
require(['knockout', 'app', 'jasmineBoot'],
    function (ko, ViewModel) {
        // load app
        ko.components.register('search-form', { require: 'searchForm' });
        ko.components.register('results-list', { require: 'resultsList' });
        ko.components.register('meta-results', { require: 'metaResults' });
        ko.components.register('current-video-selection', { require: 'currentVideoSelection' });
        ko.applyBindings(ViewModel);
        // load tests
        require(['viewmodelSpecs', 'youtubeSpecs'], function () {
            // trigger jasmine
            window.onload();
        });
    });
