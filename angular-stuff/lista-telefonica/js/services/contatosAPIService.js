// Factory
angular.module("listaTelefonica").factory("contatosAPI", function ($http, config){
    var _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    }

    var _getContato = function (id) {
        return $http.get(config.baseUrl + "/contatos/" + id);
    }

    var _saveContatos = function (contato) {
        console.log(contato);
        return $http.post(config.baseUrl + "/contatos", {'body': contato});
    }

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContatos
    };
});