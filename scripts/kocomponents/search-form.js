// search-form.js
define(['knockout', 'text!../../kotemplates/searchform.html'], function(ko, htmlString) {
    var searchForm = function(params) {
        this.searchTerm = params.searchTerm;

        this.parseSearch = function (searchInput) {
            searchTerm(searchInput.query.value);
        };
    };

    return { viewModel: searchForm, template: htmlString }
});