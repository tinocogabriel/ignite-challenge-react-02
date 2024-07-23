import { produce } from 'immer'
import { Coffee } from '../../contexts/CoffeeContext'
import { ActionTypes } from './actions'

interface CoffeeState {
  coffeeInCart: Coffee[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coffeeReducer(state: CoffeeState, action: any) {
  if (action.type === ActionTypes.ADD_NEW_COFFEE) {
    return produce(state, (draft) => {
      const { coffee, quantity } = action.payload

      const indexCoffeeInCart = state.coffeeInCart.findIndex(
        (item) => item.id === coffee.id,
      )
      if (indexCoffeeInCart !== -1) {
        draft.coffeeInCart[indexCoffeeInCart].quantity = quantity
      } else {
        draft.coffeeInCart.push({ ...coffee, quantity })
      }
    })
  } else if (action.type === ActionTypes.REMOVE_COFFEE) {
    return produce(state, (draft) => {
      const { id } = action.payload

      const indexCoffeeInCart = state.coffeeInCart.findIndex(
        (item) => item.id === id,
      )

      if (indexCoffeeInCart !== -1) {
        draft.coffeeInCart.splice(indexCoffeeInCart, 1)
      }
    })
  } else if (action.type === ActionTypes.ADD_COFFEE_QUANTITY) {
    return produce(state, (draft) => {
      const { id } = action.payload

      const indexCoffeeInCart = state.coffeeInCart.findIndex(
        (item) => item.id === id,
      )

      if (indexCoffeeInCart !== -1) {
        const newQuantity = draft.coffeeInCart[indexCoffeeInCart].quantity
          ? draft.coffeeInCart[indexCoffeeInCart].quantity + 1
          : 1
        draft.coffeeInCart[indexCoffeeInCart].quantity = newQuantity
      }
    })
  } else if (action.type === ActionTypes.DECREASE_COFFEE_QUANTITY) {
    return produce(state, (draft) => {
      const { id } = action.payload
      console.log(id)
      const indexCoffeeInCart = state.coffeeInCart.findIndex(
        (item) => item.id === id,
      )

      if (indexCoffeeInCart !== -1) {
        const atualQuantity = draft.coffeeInCart[indexCoffeeInCart].quantity!

        if (atualQuantity > 1) {
          const newQuantity = atualQuantity - 1
          draft.coffeeInCart[indexCoffeeInCart].quantity = newQuantity
        }
      }
    })
  } else if (action.type === ActionTypes.CLEAN_CART) {
    return produce(state, (draft) => {
      draft.coffeeInCart = []
    })
  }

  return state
}
