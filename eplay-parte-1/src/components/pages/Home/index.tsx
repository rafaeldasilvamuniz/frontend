import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurant'

/*import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'*/

import sushi from '../../assets/images/sushi.png'
import macarrao from '../,./assets/images/macarrao.png'

export const rest: Restaurant[] = [
  {
    id: 1,
    restaurante='Japones'
    image= sushi
    fundo=['20%', '50%']
    titulo='Hioki Sushi'
    descricao='Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
    frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
    rápida, embalagens cuidadosas e qualidade garantida.Experimente o
    Japão sem sair do lar com nosso delivery!'
    botao='Saiba Mais' />
  },
  {
    id: 2,
    restaurante='macarrao'
    image= macarrao
    fundo=['20%', '50%']
    titulo='Macarrao da tia(o) Jú'
    descricao='TESTE DA MACARRONADA ITALIANA'
    botao='Saiba Mais' />
    //image: resident
  }
]
