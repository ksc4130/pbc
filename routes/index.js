
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Penny Bottom Candles' });
};

exports.events = function(req, res){
  res.render('events', { title: 'Penny Bottom Candles' });
};

exports.gallery = function(req, res){
  res.render('gallery', { title: 'Penny Bottom Candles' });
};