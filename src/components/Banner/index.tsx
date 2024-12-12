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
  Destaque,
  TextoDestaque,
  Categoria,
  TextJaponesa
} from './styles'
import bannerImg from '../../assets/images/logo.png'
import sushiImg from '../../assets/images/sushi.png'
import nota from '../../assets/images/nota.png'
import Tag from '../Tag'

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
  </Imagem>
)

export default Banner
