(function (app) {
  'use strict';

  app.registerModule('tag', ['core']);
  app.registerModule('tag.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
