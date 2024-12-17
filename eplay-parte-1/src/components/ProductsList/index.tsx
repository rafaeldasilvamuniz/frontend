import React from 'react'
import Restaurant from '../../models/Restaurant'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <><Product
            key={restaurant.id}
            restaurante={restaurant.restaurante}
            image={restaurant.image}
            fundo={restaurant.fundo}
            titulo={restaurant.titulo}
            descricao={restaurant.descricao}
            botao={restaurant.botao} />
            <Product
              key={restaurant.id}
              restaurante={restaurant.restaurante}
              image={restaurant.image}
              fundo={restaurant.fundo}
              titulo={restaurant.titulo}
              descricao={restaurant.descricao}
              botao={restaurant.botao} />
              <Product
              key={restaurant.id}
              restaurante={restaurant.restaurante}
              image={restaurant.image}
              fundo={restaurant.fundo}
              titulo={restaurant.titulo}
              descricao={restaurant.descricao}
              botao={restaurant.botao} /><Product
              key={restaurant.id}
              restaurante={restaurant.restaurante}
              image={restaurant.image}
              fundo={restaurant.fundo}
              titulo={restaurant.titulo}
              descricao={restaurant.descricao}
              botao={restaurant.botao} /><Product
              key={restaurant.id}
              restaurante={restaurant.restaurante}
              image={restaurant.image}
              fundo={restaurant.fundo}
              titulo={restaurant.titulo}
              descricao={restaurant.descricao}
              botao={restaurant.botao} /><Product
              key={restaurant.id}
              restaurante={restaurant.restaurante}
              image={restaurant.image}
              fundo={restaurant.fundo}
              titulo={restaurant.titulo}
              descricao={restaurant.descricao}
              botao={restaurant.botao} /></>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
