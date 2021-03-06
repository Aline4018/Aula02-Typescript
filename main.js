"use strict";
exports.__esModule = true;
var Personagem_1 = require("./Personagem");
var prompt = require("prompt-sync");
var person = new Personagem_1["default"]("Sansa Stark", 100, 40, 20, 20);
var teclado = prompt();
var option = 0;
while (option != 9 || person.isDead()) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Descansar                      |");
    console.log("|4. Entrar em batalha              |");
    console.log("|8. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");
    option = +teclado("Escolha uma ação: ");
    switch (option) {
        case 1:
            person.treinarAtacar();
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;
        case 3:
            var horas = +teclado("Digite o número de horas: ");
            person.descansar(horas);
            console.log(person.status());
            break;
        case 4:
            var rest = person.batalhar();
            console.log("Esta batalha custo " + rest + " de energia");
            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Ops! Morreu!");
