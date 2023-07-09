import { Intro } from "./components/Intro";
import { OurCoffeesPage } from "./components/OurCoffees";
import { HomeContainer } from "./styles";
import { UseCart } from './../../hooks/useCart';

export function HomePage() {
  const { cartItems } = UseCart();
  
  return (
    <HomeContainer>
      <Intro />
      <OurCoffeesPage />
    </HomeContainer>
  )
}