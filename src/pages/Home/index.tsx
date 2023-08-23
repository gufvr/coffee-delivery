import { Intro } from "./components/Intro";
import { OurCoffeesPage } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage() {  
  return (
    <HomeContainer>
      <Intro />
      <OurCoffeesPage />
    </HomeContainer>
  )
}