import { 
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer, 
  Description, 
  Name, 
  Tags 
} from "./styles";

import { ShoppingCart } from 'phosphor-react'

import expressCoffee from '../../../../assets/coffees/express-coffee.svg'
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";

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

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}