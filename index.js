var express = require('express')
var favicon = require('serve-favicon')
var path = require('path')
var bunyan = require('bunyan')
var compression = require('compression')
var exphbs = require('express-handlebars');


// CONTROLLERS
var appController = require('./controllers/app');


// APP & VIEW
var app = express();

var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }
});

// MIDDLEWARE
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3002);
app.use(compression());
app.use(favicon(path.join(__dirname,'public','images','faviconSS.ico')));
app.use(express.static(path.join(__dirname, 'public')));




// ROUTES
app.get('/', appController.index);          
app.get('/intro/start', appController.start);          
app.get('/intro/helloworld', appController.helloworld);          
app.get('/fundamental/metricgroups', appController.metricgroups);          
app.get('/fundamental/workflow', appController.workflow);          
app.get('/fundamental/techniques', appController.techniques);          
app.get('/fundamental/extensions', appController.extensions);          



// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;