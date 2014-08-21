'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.directives'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/multiSelectDropdown', { templateUrl: 'multiSelectDemo.html', controller: 'multiSelectDropdownDemoController' });
    $routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
    $routeProvider.otherwise({ redirectTo: '/multiSelectDropdown' });
} ])
.controller('multiSelectDropdownDemoController', ['$scope', function ($scope) {
    $scope.options = [
                {
                    id: 1,
                    name: 'one',
                    isSelected: false
                },

                {
                    id: 2,
                    name: 'two',
                    isSelected: false
                },

                {
                    id: 3,
                    name: 'three',
                    isSelected: false
                }
            ];
    $scope.name = 'Multi Select Drop Down';
} ]);