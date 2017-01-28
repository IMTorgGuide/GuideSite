


/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 */
exports.start = function(req, res) {
  res.render('start', {
    title: 'Getting Started'
  });
};

/**
 * GET /
 */
exports.helloworld = function(req, res) {
  res.render('helloworld', {
    title: 'helloworld'
  });
};

/**
 * GET /
 */
exports.metricgroups = function(req, res) {
  res.render('metricgroups', {
    title: 'metricgroups'
  });
};

/**
 * GET /
 */
exports.workflow = function(req, res) {
  res.render('workflow', {
    title: 'workflow'
  });
};

/**
 * GET /
 */
exports.techniques = function(req, res) {
  res.render('techniques', {
    title: 'techniques'
  });
};

exports.extensions = function(req, res) {
  res.render('extensions', {
    title: 'extensions'
  });
};