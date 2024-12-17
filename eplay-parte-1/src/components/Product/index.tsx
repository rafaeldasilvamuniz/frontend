import Tag from '../Tag'
import {
  Descricao,
  Titulo,
  Restaurante,
  Fundo,
  BordaImg,
  BotaoSm,
  TxtSm,
  Imagem,
  Leiaute,
  HeaderBar
} from './styles'
import sushiImg from '../../assets/images/sushi.png'
import bannerImg from '../../assets/images/efood.png'
import React from 'react'

const Product = () => (
  <>
    <br />
    <br />
    <Restaurante>
      <BordaImg>
        <img src={sushiImg} alt="Sushi" />
      </BordaImg>
      <Fundo>
        <Titulo>Hioki Sushi</Titulo>
        <br />
        <Descricao>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Descricao>
        <br />
        <BotaoSm>
          <TxtSm>Saiba Mais</TxtSm>
        </BotaoSm>
      </Fundo>
    </Restaurante>
  </>
)

export default Product

/*import React from 'react'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
*/
