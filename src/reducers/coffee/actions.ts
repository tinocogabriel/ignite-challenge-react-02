import { Coffee } from '../../contexts/CoffeeContext'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  ADD_COFFEE_QUANTITY = 'ADD_COFFEE_QUANTITY',
  DECREASE_COFFEE_QUANTITY = 'DECREASE_COFFEE_QUANTITY',
  CLEAN_CART = 'CLEAN_CART',
}

export function addCoffeeToTheCart(coffee: Coffee, quantity: number) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: { coffee, quantity },
  }
}

export function removeCoffeeOfTheCart(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { id },
  }
}

export function addCoffeeQuantity(id: string) {
  return {
    type: ActionTypes.ADD_COFFEE_QUANTITY,
    payload: { id },
  }
}

export function decreaseCoffeeQuantity(id: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_QUANTITY,
    payload: { id },
  }
}

export function cleanCart() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}
