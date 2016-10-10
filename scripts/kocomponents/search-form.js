// search-form.js
define(['text!../../kotemplates/searchform.html'],
    function(htmlString) {

    var searchForm = function(params) {
        this.searchInput = params.searchInput;

        this.parseSearch = function(searchInput) {
            var searchInput = searchInput.query.value;
            this.searchInput(searchInput);
        }
    }

    return { viewModel: searchForm, template: htmlString }
});
