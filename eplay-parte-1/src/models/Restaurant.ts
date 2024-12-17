class Restaurant {
  id: number
  restaurante: string
  image: string
  fundo: string
  titulo: string
  descricao: string
  botao: string
  constructor(
    id: number,
    restaurante: string,
    image: string,
    fundo: string,
    titulo: string,
    descricao: string,
    botao: string
  ) {
    this.id = id
    this.restaurante = restaurante
    this.image = image
    this.fundo = fundo
    this.titulo = titulo
    this.descricao = descricao
    this.botao = botao
  }
}

export default Restaurant
