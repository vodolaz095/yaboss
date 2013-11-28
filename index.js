var OAuth = require('oauth'),
  qs = require('querystring');

/**
 * @name Yaboss
 * @param {string} consumerKey
 * @param {string} consumerSecret
 * @returns {YaBoss}
 * @constructor
 */
function YaBoss(consumerKey, consumerSecret){
  this.consumerKey = consumerKey;
  this.consumerSecret = consumerSecret;
  return this;
}

/**
 * @name yaBoss.search
 * @param {string} provider one of 'web','limitedweb','images','news'	,'blogs, 'ads'
 * @param {string} query search query
 * @param {int} count number of responses
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to web search api
 */
YaBoss.prototype.search = function(provider, query, count, callback){
  if(callback === undefined){
    callback = count;
    count = 10;
  }

  var webSearchUrl = 'https://yboss.yahooapis.com/ysearch/'+provider,
    finalUrl = webSearchUrl +'?'+ qs.stringify({q: query,count: count || 10});

  var oa = new OAuth.OAuth(webSearchUrl, finalUrl , this.consumerKey, this.consumerSecret, "1.0", null, "HMAC-SHA1");
  oa.setClientOptions({ requestTokenHttpMethod: 'GET' });
  oa.getProtectedResource(finalUrl, "GET", '','', callback);
};


YaBoss.prototype.searchWeb = function(query, count, callback){
  this.search('web',query,count,callback);
};

YaBoss.prototype.searchLimitedWeb = function(query, count, callback){
  this.search('limitedweb',query,count,callback);
};

YaBoss.prototype.searchImages = function(query, count, callback){
  this.search('images',query,count,callback);
};

YaBoss.prototype.searchNews = function(query, count, callback){
  this.search('news',query,count,callback);
};

YaBoss.prototype.searchBlogs = function(query, count, callback){
  this.search('blogs',query,count,callback);
};

YaBoss.prototype.searchAds = function(query, count, callback){
  this.search('ads',query,count,callback);
};


/**
 * @name yaBoss.getGeoSearch
 * @param {string} query search query
 * @param {int} count number of responses
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to web search api
 */
YaBoss.prototype.getGeoSearch = function(query, count, callback){
  if(callback === undefined){
    callback = count;
    count = 10;
  }

  var geoSearchUrl = 'https://yboss.yahooapis.com/geo/placefinder',
    finalUrl = geoSearchUrl +'?'+ qs.stringify({q: query,count: count || 10});

  var oa = new OAuth.OAuth(webSearchUrl, finalUrl , this.consumerKey, this.consumerSecret, "1.0", null, "HMAC-SHA1");
  oa.setClientOptions({ requestTokenHttpMethod: 'GET' });
  oa.getProtectedResource(finalUrl, "GET", '','', callback);
};

module.exports = exports = YaBoss;