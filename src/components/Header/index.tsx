import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { UseCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = UseCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
        <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill' />
            Sorocaba, SP
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              { cartQuantity >= 1 && <span>{cartQuantity}</span> }
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}