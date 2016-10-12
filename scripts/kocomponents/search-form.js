// search-form.js
define(['text!../../kotemplates/searchform.html'],
    function(htmlString) {

        // update searchInput query term in main ViewModel
        var searchForm = function(params) {
            this.searchInput = params.searchInput;

            this.parseSearch = function(searchInput) {
                searchInput = searchInput.query.value;
                this.searchInput(searchInput);
            };
        };

        return { viewModel: searchForm, template: htmlString };
    });
