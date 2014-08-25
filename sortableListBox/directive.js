'use strict';

(function(angular) {
    angular.module('myApp.directives.sortable', []).directive('sortableListBox', [

        function() {
            return {
                restrict: 'E',
                templateUrl: 'sortableListBox/view.html',
                scope: {
                    items: '=',
                    click: '=',
                    activeItemStyle: '@',
                    sortableList: '@'
                },
                link: function(scope, element) {
                    scope.clicked = function() {
                        if (angular.isFunction(scope.click)) {
                            scope.click.apply(this, arguments);
                        }
                    };

                    if (scope.sortableList) {
                        element.children().sortable();

                        element.children().on('sortupdate', function() {
                            var newOrderArray = $(this).sortable('toArray', {
                                attribute: 'data-id'
                            });
                            var newItemsArray = [];

                            newOrderArray.forEach(function(newOrderItem) {
                                var foundItem;

                                scope.items.forEach(function(existingItem) {
                                    if (existingItem.id.toString() === newOrderItem.toString()) {
                                        foundItem = existingItem;
                                    };
                                });

                                newItemsArray.push(foundItem);
                            });

                            scope.items = newItemsArray;
                            scope.$apply();
                        });
                    }

                    scope.moveUp = function(e, index) {
                        e.preventDefault();
                        e.stopPropagation();

                        if (index > 0) {
                            var b = scope.items[index - 1];
                            scope.items[index - 1] = scope.items[index];
                            scope.items[index] = b;
                        }
                    };

                    scope.moveDown = function(e, index) {
                        e.preventDefault();
                        e.stopPropagation();

                        if (index < scope.items.length - 1) {
                            var b = scope.items[index + 1];
                            scope.items[index + 1] = scope.items[index];
                            scope.items[index] = b;
                        }
                    };
                }
            };
        }
    ]);
})(window.angular);
