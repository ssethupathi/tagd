(function () {
  'use strict';

  angular
    .module('tag')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Tag',
      state: 'tag'
    });
  }
}());
