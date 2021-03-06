define(['jasmineBoot'], function() {
    describe('youtube search', function() {
        beforeEach(function(done) {
            self.searchInput('puppies');
            setTimeout(function() {
                done();
            }, 4500);
        });

        it('requests and retrieves search results', function() {
            expect(self.videoResults().length).toBeTruthy();
        });

        it('parses video snippet data', function() {
            var video = self.videoResults()[0];
            expect(video.videoLink()).toBeDefined();
            expect(video.channelLink()).toBeDefined();
            expect(video.channelTitle()).toBeDefined();
            expect(video.description()).toBeDefined();
            expect(video.dateInfo()).toBeDefined();
            expect(video.publishDate()).toBeDefined();
            expect(video.smallThumbnail()).toBeDefined();
            expect(video.mediumThumbnail()).toBeDefined();
            expect(video.title()).toBeDefined();
        });
    });
});
