//energia, vida, ataque, defesa, nome
import prompt from "prompt-sync";
class Personagem{

  constructor( // Controi o objeto, usado para diminuir o codigo.
    public nome: string, // atributos
    public energia: number,// atributos
    public vida: number,// atributos
    public ataque: number,// atributos
    public defesa: number, // atributos
  ){}

}
let sansa: Personagem = new Personagem ("Sansa Stark",100, 40, 20, 20)
let jon: Personagem = new Personagem(" Jon snow ",100, 40, 20, 20)


let teclado = prompt();
let option: number = 0;

while(option != 9){
  console.log('+========= Personagem =========+');
  console.log('|1. Treinar ataque             |');
  console.log('|2. Treinar defesa             |');
  console.log('|3. Imprimir atributos         |');
  console.log('|9. Sair                       |');
  console.log('+==============================+');

  option = +teclado('Escolha uma ação');
  switch(option) {
    case 1:
sansa.ataque +=2;
         break;
        case 3:
           console.log("sansa:>>", sansa)
   default:

         break;



  }
}




jon.ataque = 50;

console.log("Person", jon);
