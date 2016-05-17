module.exports = function(app) {

   app.use('/api/posts', require('./api/post'));
   app.use('/api/Adds', require('./api/Adds'));
   app.use('/api/Facility', require('./api/Facility'));
   app.use('/api/Details', require('./api/Details'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
   .get(function(req, res) {
    res.send(404);
  })

};