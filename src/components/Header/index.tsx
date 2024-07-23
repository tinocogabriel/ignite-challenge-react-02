import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/Logo.png'
import {
  CartButton,
  HeaderContainer,
  LocationAndCartContainer,
  LocationContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { NavLink } from 'react-router-dom'
export function Header() {
  const { coffeeInCart } = useContext(CoffeeContext)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img
          src={logoCoffeeDelivery}
          alt="Um copo de café roxo com a descrição Coffee Delivery a direita dele"
        />
      </NavLink>
      <LocationAndCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {coffeeInCart && coffeeInCart.length > 0 && (
              <span>{coffeeInCart.length}</span>
            )}
          </CartButton>
        </NavLink>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}
