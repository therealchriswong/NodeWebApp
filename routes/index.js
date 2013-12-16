
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Node.js Example', id:'/' });
};

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!', id:'helloworld' });
};