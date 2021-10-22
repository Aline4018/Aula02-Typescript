//energia, vida, ataque, defesa, nome
export default class Personagem{

  constructor( // Controi o objeto, usado para diminuir o codigo.
    public nome: string, // atributos
    public energia: number,// atributos
    public vida: number,// atributos
    public ataque: number,// atributos
    public defesa: number, // atributos
  ){}

}
