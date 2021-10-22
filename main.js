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
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;
            break;
        case 2:
            person.defesa += Math.random() * 5;
            person.energia -= Math.random() * 10;
            break;
        case 3:
            person.energia += Math.random() * 10;
            break;
        case 4:
            person.energia -= Math.random() * 100;
            if (person.energia < 0) {
                console.log('Ops! Voce morreu');
            }
            break;
        case 8:
            console.log("person:>> ", person);
            break;
        default:
            break;
    }
}