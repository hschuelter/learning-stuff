angular.module("listaTelefonica").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];
            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module("listaTelefonica").directive("uiAccordion", function () {
    return {
        // templateUrl: "view/accordion.html",
        template: `
                <div class="ui-accordion-title" ng-click="open()"> {{title}} </div>
                <div class="ui-accordion-content" ng-show="isOpened" ng-transclude> </div>
                `,
        transclude: true,
        scope: {
            title: '@'
        },
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function() {
                ctrl.closeAll();
                scope.isOpened = true;
            }
        }
    };
});