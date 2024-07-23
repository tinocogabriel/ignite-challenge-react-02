import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import introductionImage from '../../assets/coffee-banner.png'
import {
  IntroductionContainer,
  ItensContainer,
  TitleContainer,
  TitleContent,
  CoffeeList,
} from './styles'
import { useTheme } from 'styled-components'
import { coffees } from '../../../data.json'
import { Card } from '../../components/Card'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <IntroductionContainer>
        <TitleContainer>
          <TitleContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContent>

          <ItensContainer>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              Compra simples e segura
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['base-text'] }}
              />
              Embalagem mantém o café intacto
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.yellow }}
              />
              Entrega rápida e rastreada
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.purple }}
              />
              O café chega fresquinho até você
            </div>
          </ItensContainer>
        </TitleContainer>
        <img
          src={introductionImage}
          alt="Foto de um copo de café com a logomarca do Coffe Delivery"
        />
      </IntroductionContainer>
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((item) => {
            return <Card key={item.id} data={item} />
          })}
        </div>
      </CoffeeList>
    </>
  )
}
