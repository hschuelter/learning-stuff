angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, operadoras, serialGenerator) {
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos");

        // contatosAPI.saveContato(contato)
        // .then(function successCallback(response) {
        //     delete $scope.contato;
        //     $scope.contatoForm.$setPristine();
        //     $location.path("/contatos");
        // });
    };

});