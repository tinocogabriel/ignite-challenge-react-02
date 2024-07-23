import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeImage,
  CoffeeTags,
  CoffeeTitle,
  CoffeeDescription,
  CoffeeOrder,
  CoffeePrice,
  CoffeeAction,
  CoffeeQuantity,
  CoffeeAddCoffeeButton,
  CardContainer,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { Coffee, CoffeeContext } from '../../contexts/CoffeeContext'

interface CoffeeCardProps {
  data: Coffee
}
export function Card({ data }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { coffeeInCart, addCart } = useContext(CoffeeContext)

  useEffect(() => {
    if (coffeeInCart && coffeeInCart.length > 0) {
      const indexCoffee = coffeeInCart.findIndex((item) => item.id === data.id)

      if (indexCoffee > -1) {
        setQuantity(coffeeInCart[indexCoffee].quantity!)
      }
    }
  }, [])

  function addQuantity() {
    const newQuantity = quantity + 1
    if (newQuantity < 100) {
      setQuantity(newQuantity)
    }
  }

  function removeQuantity() {
    const newQuantity = quantity - 1
    if (newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  function handleAddCart() {
    addCart(data, quantity)
  }

  return (
    <CardContainer>
      <CoffeeImage src={data.image} alt="" />
      <CoffeeTags>
        {data.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </CoffeeTags>
      <CoffeeTitle>{data.title}</CoffeeTitle>
      <CoffeeDescription>{data.description}</CoffeeDescription>
      <CoffeeOrder>
        <CoffeePrice>
          <span>R$</span>
          <span>{data.price.toFixed(2)}</span>
        </CoffeePrice>
        <CoffeeAction>
          <CoffeeQuantity>
            <button onClick={removeQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={addQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeQuantity>
          <CoffeeAddCoffeeButton onClick={handleAddCart}>
            <ShoppingCart size={22} weight="fill" />
          </CoffeeAddCoffeeButton>
        </CoffeeAction>
      </CoffeeOrder>
    </CardContainer>
  )
}
