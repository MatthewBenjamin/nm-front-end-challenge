// meta-results.js
define(['text!../../kotemplates/metaresults.html'], function(htmlString) {

    var metaResults = function(params) {
        this.searchPageToken = params.searchPageToken;

        this.parseSearch = function(pageToken) {
            this.searchPageToken(pageToken);
        };
    };

    return { viewModel: metaResults, template: htmlString };
});
