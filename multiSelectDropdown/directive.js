'use strict';

(function(angular) {
    angular.module('myApp.directives.dropdown', []).directive('multiSelectDropdown', [

        function() {
            return {
                restrict: 'E',
                templateUrl: 'multiSelectDropdown/view.html',
                scope: {
                    name: '=',
                    options: '='
                },
                link: function(scope) {
                    scope.selectAll = function() {
                        scope.options.forEach(function(option) {
                            option.isSelected = true;
                        });
                    };

                    scope.deselectAll = function() {
                        scope.options.forEach(function(option) {
                            option.isSelected = false;
                        });
                    };

                    scope.setSelectedItem = function() {
                        this.option.isSelected = this.option.isSelected ? false : true;
                    };
                }
            };
        }
    ]);
})(window.angular);