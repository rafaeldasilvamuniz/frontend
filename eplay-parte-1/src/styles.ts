import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF8F2',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  salmao: '#E66767',
  creme: '#FFEBD9',
  amarelo: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.branca};

  }


`

/*padding-top: 40px;
.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}*/
