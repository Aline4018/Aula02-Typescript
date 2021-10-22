export default class Personagem{

  constructor( // Controi o objeto, usado para diminuir o codigo.
    public nome: string, // atributos
    public energia: number,// atributos
    public vida: number,// atributos
    public ataque: number,// atributos
    public defesa: number, // atributos
  ){}
  // TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETROS
  // TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE , USE RETORNO

  status(): string{// Assinatura de um metodo comum
    return(
      "Guerreiro: \n" +
      "\nNome: " +
      this.nome +
      ("\nEnergia: " +this.energia.toFixed(1)) +
      ("\nAtaque: " +this.ataque.toFixed(1)) +
      ("\nDefesa: " + this.defesa.toFixed(1))
    );
  }
treinarAtacar(): void{
  this.ataque += Math.random() * 7;
  this.energia -= Math.random() * 10;
    if(this.defesa>100){
      this.defesa = 0;
  }
}
treinarDefesa(): void{
  this.defesa += Math.random() * 5;
  this.energia -= Math.random() * 10;
  if(this.defesa>100){
      this.defesa = 0;

  }
}
descansar( hour: number):void{
  this.energia += hour * (Math.random() * 10);
  if(this.energia>100){
    this.energia = 100;
  }
}
 batalhar(): number{
   let desgaste: number = Math.random() *100;
   this.energia -= desgaste;
   return desgaste;

}
 isDead(): boolean{
   return this.energia<0;
   }
 }
