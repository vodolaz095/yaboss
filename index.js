var OAuth = require('oauth'),
  qs = require('querystring');

var internals = {};

/**
 * @name Yaboss
 * @param {String} consumerKey
 * @param {String} consumerSecret
 * @returns {YaBoss}
 * @constructor
 */
function YaBoss(consumerKey, consumerSecret){
  this.consumerKey = consumerKey;
  this.consumerSecret = consumerSecret;
  return this;
}

/**
 * A simple implementation of object extend
 * @param a
 * @param b
 */
internals.extend = function(a, b) {
  for (var x in b) a[x] = b[x];
  return a;
};

/**
 * @name yaBoss#search
 * @param {string} provider one of 'web','limitedweb','images','news' ,'blogs, 'ads'
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to web search api
 */
YaBoss.prototype.search = function(provider, query, options, callback){
  if(callback === undefined){
    callback = options;
    options = {count: 10}; // Assign default count
  }

  var webSearchUrl = 'https://yboss.yahooapis.com/ysearch/'+provider,
    finalUrl = webSearchUrl +'?'+ qs.stringify(internals.extend({q: query}, options));

  var oa = new OAuth.OAuth(webSearchUrl, finalUrl , this.consumerKey, this.consumerSecret, "1.0", null, "HMAC-SHA1");
  oa.setClientOptions({ requestTokenHttpMethod: 'GET' });
  oa.getProtectedResource(finalUrl, "GET", '','', callback);
};


/**
 * @name yaBoss#searchWeb
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to web search api
 */
YaBoss.prototype.searchWeb = function(query, options, callback){
  this.search('web',query,options,callback);
};

/**
 * @name yaBoss#searchLimitedWeb
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to limit web search api
 */
YaBoss.prototype.searchLimitedWeb = function(query, options, callback){
  this.search('limitedweb',query,options,callback);
};

/**
 * @name yaBoss#searchImages
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to images search api
 */
YaBoss.prototype.searchImages = function(query, options, callback){
  this.search('images',query,options,callback);
};

/**
 * @name yaBoss#searchImages
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to news search api
 */
YaBoss.prototype.searchNews = function(query, options, callback){
  this.search('news',query,options,callback);
};

/**
 * @name yaBoss#searchBlogs
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to search blogs api
 */
YaBoss.prototype.searchBlogs = function(query, options, callback){
  this.search('blogs',query,options,callback);
};

/**
 * @name yaBoss#searchAds
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to search ads api
 */
YaBoss.prototype.searchAds = function(query, options, callback){
  this.search('ads',query,options,callback);
};


/**
 * @name yaBoss#getGeoSearch
 * @param {string} query search query
 * @param {object} options - additional options. Some of the available options are: 'count', 'filter', 'sites',
 * for the complete list please refer to Boss's documentation: http://developer.yahoo.com/boss/search/boss_api_guide/v2_univer_api_args.html
 * @param {function} callback - function(err,dataFound, response){}
 * @description
 * Issue a call to web search api
 */
YaBoss.prototype.getGeoSearch = function(query, options, callback){
  if(callback === undefined){
    callback = options;
    options = {count: 10};
  }

  var geoSearchUrl = 'https://yboss.yahooapis.com/geo/placefinder',
    finalUrl = geoSearchUrl +'?'+ qs.stringify(internals.extend({q: query}, options));

  var oa = new OAuth.OAuth(geoSearchUrl, finalUrl , this.consumerKey, this.consumerSecret, "1.0", null, "HMAC-SHA1");
  oa.setClientOptions({ requestTokenHttpMethod: 'GET' });
  oa.getProtectedResource(finalUrl, "GET", '','', callback);
};

module.exports = exports = YaBoss;