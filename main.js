"use strict";
exports.__esModule = true;
var Personagem_1 = require("./Personagem");
var prompt_sync_1 = require("prompt-sync");
var person = new Personagem_1["default"]("Sansa Stark", 100, 40, 20, 20); //Objeto
var teclado = (0, prompt_sync_1["default"])();
var option = 0;
while (option != 9) {
    console.log("+========= Personagem =========+");
    console.log("|1. Treinar ataque             |");
    console.log("|2. Treinar defesa             |");
    console.log("|3. Descansar                  |");
    console.log("|4. Entrar em batalha          |");
    console.log("|8. Imprimir atributos         |");
    console.log("|9. Sair                       |");
    console.log("+==============================+");
    option = +teclado('Escolha uma ação');
    switch (option) {
        case 1:
            person.treinarAtacar();
            person.status();
            break;
        case 2:
            person.treinarDefesa();
            person.status();
            break;
        case 3:
            person.descansar();
            person.status();
            break;
        case 4:
            person.batalhar();
            person.status();
            break;
        case 8:
            person.status();
            break;
        default:
            break;
    }
}
