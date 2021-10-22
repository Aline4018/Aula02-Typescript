"use strict";
exports.__esModule = true;
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
    Personagem.prototype.status = function () {
        console.log("Guerreiro: ");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    };
    Personagem.prototype.treinarAtacar = function () {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        this.isDead();
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        this.isDead();
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.descansar = function () {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem.prototype.batalhar = function () {
        this.energia -= Math.random() * 100;
        this.isDead();
    };
    Personagem.prototype.isDead = function () {
        if (this.energia < 0) {
            console.log('Ops! Voce morreu');
        }
    };
    return Personagem;
}());
exports["default"] = Personagem;
