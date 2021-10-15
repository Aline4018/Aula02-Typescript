"use strict";
//energia, vida, ataque, defesa, nome
var Personagem = /** @class */ (function () {
    function Personagem() {
        this.nome = '';
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
    }
    return Personagem;
}());
var sansa;
sansa = new Personagem();
sansa.nome = 'Sansa Stark';
sansa.ataque = 10;
sansa.defesa = 20;
sansa.energia = 50;
sansa.vida = 100;
console.log("person:>>", sansa);
var jon = new Personagem();
jon.nome = " Jon Snow";
jon.energia = 80;
jon.vida = 50;
jon.ataque = 50;
jon.vida = 50;
console.log("Person", jon);
