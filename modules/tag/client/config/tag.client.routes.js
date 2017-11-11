(function () {
  'use strict';

  angular
    .module('tag.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('tag', {
        url: '/tag',
        templateUrl: '/modules/tag/client/views/tag.client.view.html',
        controller: 'ChatController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
}());
