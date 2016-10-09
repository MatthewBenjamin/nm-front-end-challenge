// search-form.js
define(['knockout', 'youtube', 'text!../../kotemplates/searchform.html'],
    function(ko, youtube, htmlString) {
    var searchForm = function(params) {
        this.searchResults = params.searchResults;

        this.parseSearch = function (searchInput) {
            var searchTerm = searchInput.query.value
            var resultsContainer = this.searchResults;
            youtube.requestVideos(searchTerm, resultsContainer);
        };
    };

    return { viewModel: searchForm, template: htmlString }
});