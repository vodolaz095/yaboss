yaboss
======

Simple nodejs wrapper for Yahoo BOSS web api


Example
======

```javascript

    var YaBoss = require('yaboss');
    var YaBossClient = new YaBoss('someCustomerKey', 'someCustomerSecret');

    YaBossClient.search('web','yahoo',10, function(err,dataFound,response){...});
    YaBossClient.searchWeb('yahoo',10, function(err,dataFound,response){...});
    YaBossClient.searchLimitedWeb('yahoo',10, function(err,dataFound,response){...});
    YaBossClient.searchImages('yahoo',10, function(err,dataFound,response){...});
    YaBossClient.searchNews('yahoo',10, function(err,dataFound,response){...});
    YaBossClient.searchBlogs('yahoo',10, function(err,dataFound,response){...});
    YaBossClient.searchAds('yahoo',10, function(err,dataFound,response){...});


```

Full Yahoo BOSS Api documentation
======

[http://developer.yahoo.com/boss/search/boss_api_guide/](http://developer.yahoo.com/boss/search/boss_api_guide/)


Test
======

