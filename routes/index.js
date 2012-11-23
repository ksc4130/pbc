
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Flywheels Hot Rod Club' });
};

exports.events = function(req, res){
  res.render('events', { title: 'Flywheels Hot Rod Club' });
};

exports.gallery = function(req, res){
  res.render('gallery', { title: 'Flywheels Hot Rod Club' });
};