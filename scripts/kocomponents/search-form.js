// search-form.js
define(['knockout', 'youtube', 'text!../../kotemplates/searchform.html'],
    function(ko, youtube, htmlString) {
    var searchForm = function(params) {
        this.videoResults = params.videoResults;
        this.metaResults = params.metaResults;

        this.parseSearch = function (searchInput) {
            var searchTerm = searchInput.query.value
            var videoResultsContainer = this.videoResults;
            var metaResultsContainer = this.metaResults;
            youtube.requestVideos(searchTerm, videoResultsContainer, metaResultsContainer);
        };
    };

    return { viewModel: searchForm, template: htmlString }
});
