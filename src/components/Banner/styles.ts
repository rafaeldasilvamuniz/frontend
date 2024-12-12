import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

export const HeaderBar = styled.header`
  width: 1366px;
  height: 298px;
  top: 1850px;
  gap: 0px;
  opacity: 0px;

  display: flex;
  align-items: left;
  justify-content: space-between;
  background-color: ${cores.creme};
`

export const Leiaute = styled.p`
  width: 539px;
  height: 84px;
  top: 236px;
  left: 414px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${cores.salmao};
`

export const Corpo = styled.image`
  width: 1024px;
  height: 1290px;
  top: 440px;
  left: 171px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  color: Mixed solid '#E66767';
`

export const Sushi = styled.image`
  width: 472px;
  height: 217px;
  top: 440px;
  left: 171px;
  gap: 0px;
  opacity: 0px;
`

export const FundoSushi = styled.div`
  width: 472px;
  height: 181px;
  top: 657px;
  left: 171px;
  gap: 0px;
  border: 0px 1px 1px 1px;
  opacity: 0px;

  background-color: ${cores.branca};

  border-width: 0px, 1px, 1px, 1px;

  border-style: solid;

  border-color: ${cores.salmao};
`

export const TextoSushi = styled.p`
  width: 456px;
  height: 88px;
  top: 702px;
  left: 179px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${cores.salmao};
`

export const Hioki = styled.h1`
  width: 92px;
  height: 21px;
  top: 665px;
  left: 178px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${cores.salmao};
`

export const Nota = styled.image`
  width: 55px;
  height: 21px;
  top: 665px;
  left: 580px;
  gap: 0px;
  opacity: 0px;
`

export const Destaque = styled.button`
  width: 121px;
  height: 26px;
  top: 456px;
  left: 437px;
  gap: 0px;
  opacity: 0px;

  color: ${cores.creme};
`

export const TextoDestaque = styled.text`
  width: 113px;
  height: 14px;
  top: 462px;
  left: 441px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  background-color: ${cores.salmao};
`

export const Categoria = styled.button`
  width: 61px;
  height: 26px;
  top: 456px;
  left: 566px;
  gap: 0px;
  opacity: 0px;

  background-color: ${cores.creme};
`

export const TextJaponesa = styled.text`
  width: 53px;
  height: 14px;
  top: 462px;
  left: 570px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  background-color: ${cores.salmao};
`

export const SaibaMais = styled.div`
  width: 82px;
  height: 24px;
  top: 806px;
  left: 179px;
  gap: 0px;
  opacity: 0px;
`

export const TextoSaibaMais = styled.text`
  width: 70px;
  height: 16px;
  top: 4px;
  left: 6px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${cores.creme};
`

export const BotaoSaibaMais = styled.button`
  width: 82px;
  height: 24px;
  gap: 0px;
  opacity: 0px;

  background-color: ${cores.salmao};
`

/*export const Botao = styled.button`
  width: 82px;
  height: 24px;
  top: 806px;
  left: 179px;
  gap: 0px;
  opacity: 0px;
`
*/
