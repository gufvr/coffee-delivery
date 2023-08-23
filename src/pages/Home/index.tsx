import { Intro } from "./components/Intro";
import { OurCoffeesPage } from "./components/OurCoffees";
import { HomeContainer } from "./styles";
import { UseCart } from './../../hooks/useCart';

export function HomePage() {  
  return (
    <HomeContainer>
      <Intro />
      <OurCoffeesPage />
    </HomeContainer>
  )
}