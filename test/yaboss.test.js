var YaBoss = require('./../index.js'),
  should = require('should');


describe('YaBoss', function () {
  it('is a constructor', function () {
    YaBoss.should.be.a.Function;
  });

  describe('Sanity test for instance created. It', function () {
    yaBoss = new YaBoss('someKey', 'someSecret');

    it('have proper consumerKey', function () {
      yaBoss.consumerKey.should.be.equal('someKey');
    });
    it('have proper consumerSecret', function () {
      yaBoss.consumerSecret.should.be.equal('someSecret');
    });
    it('have search method', function () {
      yaBoss.search.should.be.a.Function;
    });
    it('have searchWeb method', function () {
      yaBoss.searchWeb.should.be.a.Function;
    });
    it('have searchLimitedWeb method', function () {
      yaBoss.searchLimitedWeb.should.be.a.Function;
    });
    it('have searchImages method', function () {
      yaBoss.searchImages.should.be.a.Function;
    });
    it('have searchNews method', function () {
      yaBoss.searchNews.should.be.a.Function;
    });
    it('have searchBlogs method', function () {
      yaBoss.searchBlogs.should.be.a.Function;
    });
    it('have searchAds method', function () {
      yaBoss.searchAds.should.be.a.Function;
    });
    it('have getGeoSearch method', function () {
      yaBoss.getGeoSearch.should.be.a.Function;
    });
  });
});



