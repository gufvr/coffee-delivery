import { 
  CardFooter,
  CoffeeCardContainer, 
  Description, 
  Name, 
  Tags 
} from "./styles";

import expressCoffee from '../../../../assets/coffees/express-coffee.svg'
import { RegularText, TitleText } from "../../../../components/Typography";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressCoffee} alt="" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}