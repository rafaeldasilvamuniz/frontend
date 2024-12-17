import {
  Imagem,
  Leiaute,
  HeaderBar,
  Corpo,
  Sushi,
  Hioki,
  TextoSushi,
  FundoSushi,
  SaibaMais,
  BotaoSaibaMais,
  TextoSaibaMais,
  Nota,
  Restaurante2,
  Tit,
  Desc,
  Not,
  Icons
} from './styles'
import bannerImg from '../../assets/images/logo.png'
import sushiImg from '../../assets/images/sushi.png'
import nota from '../../assets/images/nota.png'
import macarraoImg from '../../assets/images/image 1.svg'
import estrela from '../../assets/images/star.svg'
import Tag from '../Tag'
import React from 'react'
import Button from '../Button'

const Banner = () => (
  <Imagem>
    <HeaderBar>
      <br />
      <br />
      <br />
      <div>
        <Leiaute>
          <Imagem>
            <img src={bannerImg} alt="Efood" />
            <br></br>
            <Leiaute>
              Viva experiências gastronômicas no conforto da sua casa
            </Leiaute>
          </Imagem>
        </Leiaute>
      </div>
    </HeaderBar>
  </Imagem>
)

export default Banner
