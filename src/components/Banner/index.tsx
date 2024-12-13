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
    <Corpo>
      <img src={sushiImg} alt="Sushi" />
      <Sushi>
        <Tag size="small">Destaque da Semana</Tag>
        <Tag size="small">Japonesa</Tag>
      </Sushi>
      <FundoSushi>
        <Hioki>Hioki Sushi</Hioki>
        <Nota>
          <img src={nota} alt="Nota" />
        </Nota>
        <br />
        <TextoSushi>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </TextoSushi>
        <br />
        <SaibaMais>
          <BotaoSaibaMais>
            <TextoSaibaMais>Saiba Mais</TextoSaibaMais>
          </BotaoSaibaMais>
        </SaibaMais>
      </FundoSushi>
    </Corpo>
    <br />
    <br />

    <Corpo>
      <div>
        <img src={macarraoImg} alt="Macarrao" />
      </div>
      <Sushi>
        <Tag size="small">Italiana</Tag>
      </Sushi>

      <FundoSushi>
        <div>
          <Tit>
            La Dolce Vita Trattoria <Not>4.6</Not>
            <Icons>
              <img src={estrela} alt="Estrela" />
            </Icons>
          </Tit>
        </div>
        <br />
        <TextoSushi>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </TextoSushi>
        <br />
        <SaibaMais>
          <BotaoSaibaMais>
            <TextoSaibaMais>Saiba Mais</TextoSaibaMais>
          </BotaoSaibaMais>
        </SaibaMais>
      </FundoSushi>
    </Corpo>
  </Imagem>
)

export default Banner

/*
<Corpo>
      <img src={macarraoImg} alt="Macarrao" />
      <Sushi>
        <Tag size="small">Italiana</Tag>
      </Sushi>
      <FundoSushi>
        <Hioki>La Dolce Vita Trattoria</Hioki>
        <Nota>
          <img src={nota} alt="Nota" />
        </Nota>
        <br />
        <TextoSushi>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </TextoSushi>
        <br />
        <SaibaMais>
          <BotaoSaibaMais>
            <TextoSaibaMais>Saiba Mais</TextoSaibaMais>
          </BotaoSaibaMais>
        </SaibaMais>
      </FundoSushi>
    </Corpo>

    <Restaurante2>
        <Tit>La Dolce Vita Trattoria</Tit>
        <Desc>
          <TextoSushi>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </TextoSushi>
        </Desc>
      </Restaurante2>
      <br />
      <SaibaMais>
        <BotaoSaibaMais>
          <TextoSaibaMais>Saiba Mais</TextoSaibaMais>
        </BotaoSaibaMais>
      </SaibaMais>
*/
