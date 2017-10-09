/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against this application.
 */

$(function () {
    /* This test suite is all about the RSS feeds definitions.
    */
    describe('RSS Feeds', function () {
        /* This test verifies that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test verifies if each feed, in the allFeeds object,
         * has a URL defined and that the URL is not empty.
         */
        it('have URL', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        /* This test verifies if each feed, in the allFeeds object,
         * has a name defined and that the name is not empty.
         */
        it('have name', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });

    /* This test suite is all about the menu definitions.
     */
    describe('The Menu', function () {

        var body = $('body'),
            menuIcon = $('.menu-icon-link');

        /* This test verifies if the menu is hidden by default.
         */
        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* This test verifies if the menu changes visibility
         * when the menu icon is clicked.
         */
        it('changes visibility when the menu link is clicked', function () {

            var isHidden = body.hasClass('menu-hidden');

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).not.toBe(isHidden);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(isHidden);
        });

    });

    /* This test suite is all about the entries.
     */
    describe('Initial entries', function () {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('have at least a single entry', function (done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    /* This test suite is all about the feed selection.
     */
    describe('New feed selection', function () {

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var initialContent = $('.feed').html();

        beforeEach(function (done) {
            loadFeed(1, function () {
                done();
            });
        });

        it('changes the content on the screen', function (done) {
            var newContent = $('.feed').html();
            expect(initialContent).not.toBe(newContent);
            done();
        });
    });


}());
