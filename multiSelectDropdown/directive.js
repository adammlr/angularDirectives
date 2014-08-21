'use strict';

(function(angular, _, $) {
    angular.module('myApp.directives', []).directive('multiSelectDropdown', [
        function() {
            return {
                restrict: 'E',
                templateUrl: '/multiSelectDropdown/view.html',
                scope: {
                    name: '=',
                    options: '='
                },
                link: function(scope){
                    scope.selectAll = function () {
                        _.each(scope.options, function(option){
                            option.isSelected = true;
                        });
                    };
                    scope.deselectAll = function() {
                        _.each(scope.options, function(option){
                            option.isSelected = false;
                        });
                    };
                    scope.setSelectedItem = function(){
                        if(this.option.isSelected)
                        {
                            this.option.isSelected = false;
                        }
                        else
                        {
                            this.option.isSelected = true;
                        }
                    };
                    scope.isChecked = function (selected) {
                        if(selected)
                        {
                            return 'true';
                        }
                        return 'false';
                    };
               }
            };
        }
    ]);
})(window.angular, window._, window.jQuery);