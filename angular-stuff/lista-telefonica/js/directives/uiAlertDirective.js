angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        template: 
            `<div class="ui-alert">
                <div class="ui-alert-title">
                    {{topic}} ({{$id}})
                </div>
                <div class="ui-alert-message">
                    {{message}}
                    {{error}}
                </div>
                <div ng-transclude>
                </div>
            </div>`,
        replace: true,
        restrict: "AE",
        scope: {
            topic: "@title",
            message: "@",
            error: "=teste"
        },
        transclude: true
    };
});