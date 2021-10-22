"use strict";
exports.__esModule = true;
//energia, vida, ataque, defesa, nome
var Personagem = /** @class */ (function () {
    function Personagem(// Controi o objeto, usado para diminuir o codigo.
    nome, // atributos
    energia, // atributos
    vida, // atributos
    ataque, // atributos
    defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
exports["default"] = Personagem;
