import { createContext, ReactNode, useReducer, useState } from 'react'
import { coffeeReducer } from '../reducers/coffee/reducer'
import {
  addCoffeeQuantity,
  addCoffeeToTheCart,
  cleanCart,
  decreaseCoffeeQuantity,
  removeCoffeeOfTheCart,
} from '../reducers/coffee/actions'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity?: number
}

export interface Address {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

export interface Order {
  address: Address
  payment: string
  items: Coffee[]
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffeeInCart: Coffee[]
  order: Order
  addCart: (coffee: Coffee, quantity: number) => void
  removeFromCart: (id: string) => void
  addQuantityOfCoffeeInCart: (id: string) => void
  decreaseQuantityOfCoffeeInCart: (id: string) => void
  newOrder: (order: Order) => void
  cleanCoffeeInCart: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [order, setOrder] = useState<Order>({} as Order)

  const [coffeeState, dispatch] = useReducer(coffeeReducer, {
    coffeeInCart: [],
  })

  const { coffeeInCart } = coffeeState

  function addCart(coffee: Coffee, quantity: number) {
    dispatch(addCoffeeToTheCart(coffee, quantity))
  }

  function removeFromCart(id: string) {
    dispatch(removeCoffeeOfTheCart(id))
  }

  function addQuantityOfCoffeeInCart(id: string) {
    dispatch(addCoffeeQuantity(id))
  }

  function decreaseQuantityOfCoffeeInCart(id: string) {
    dispatch(decreaseCoffeeQuantity(id))
  }

  function cleanCoffeeInCart() {
    dispatch(cleanCart())
  }

  function newOrder(order: Order) {
    setOrder(order)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeInCart,
        order,
        addCart,
        removeFromCart,
        addQuantityOfCoffeeInCart,
        decreaseQuantityOfCoffeeInCart,
        newOrder,
        cleanCoffeeInCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
