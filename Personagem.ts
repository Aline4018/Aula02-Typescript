//energia, vida, ataque, defesa, nome

class Personagem{

  constructor( // Controi o objeto, usado para diminuir o codigo.
    public nome: string, // atributos
    public energia: number,// atributos
    public vida: number,// atributos
    public ataque: number,// atributos
    public defesa: number, // atributos
  ){}

}
let teclado = prompt();
let sansa: Personagem;// Objeto
sansa = new Personagem("Sansa Stark",100,40,20,20);
sansa.nome = 'Sansa Stark'
sansa.ataque = 10;

console.log("person:>>", sansa);


let jon: Personagem = new Personagem(" Jon snow ",100, 40, 20, 20); // Objeto
jon.nome = " Jon Snow";
jon.ataque = 50;

console.log("Person", jon);
