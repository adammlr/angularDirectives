'use strict';

(function(angular) {
    angular.module('myApp.directives.numericInput', []).directive('numericInput', [

        function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attr, ctrl) {
                    function fromUser(text) {
                        if (!text) {
                            return;
                        }
                        var transformedInput = text.replace(/[^0-9]/g, '');
                        if (transformedInput !== text) {
                            ctrl.$setViewValue(transformedInput);
                            ctrl.$render();
                        }
                        return transformedInput;
                    }

                    ctrl.$parsers.push(fromUser);
                }
            };
        }
    ]).directive('minValue', [

        function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attr, ctrl) {
                    return ctrl.$parsers.push(function (value) {
                        var valid = value == null || Number(value) >= Number(attr.minValue);

                        ctrl.$setValidity('min', valid);

                        return valid ? value : undefined;
                    });
                }
            };
        }
    ]).directive('maxValue', [

        function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attr, ctrl) {
                    return ctrl.$parsers.push(function (value) {

                        var valid = value == null || Number(value) <= Number(attr.maxValue);
                        console.log(value, valid);
                        ctrl.$setValidity('max', valid);

                        return valid ? value : undefined;
                    });
                }
            };
        }
    ]);
})(window.angular);
