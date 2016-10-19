define(['jasmineBoot'], function() {
    describe('view model', function() {
        it('has defined observables', function() {
            expect(self.searchInput).toBeDefined();
            expect(self.searchPageToken).toBeDefined();
            expect(self.videoResults).toBeDefined();
            expect(self.metaResults).toBeDefined();
            expect(self.currentVideoSelection).toBeDefined();
            expect(self.errorMessage).toBeDefined();
            expect(self.mobileMenu).toBeDefined();
            expect(self.toggleMobileMenu).toBeDefined();
            expect(self.performSearch).toBeDefined();
        });
    });
});
