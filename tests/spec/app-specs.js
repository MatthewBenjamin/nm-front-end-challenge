// component-spec.js
describe('app', function() {
    it('has a view model', function() {
        expect(self).toBeTruthy();
    });
});

describe('youtube search', function() {
    beforeEach(function(done) {
        self.searchInput('puppies');
        setTimeout(function() {
            done();
        }, 4500);
    });

    it('retrieves search results', function() {
        expect(self.videoResults().length).toBeTruthy();
    });

});
