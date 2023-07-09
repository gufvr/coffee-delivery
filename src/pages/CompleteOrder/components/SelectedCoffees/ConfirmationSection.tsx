import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { UseCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = UseCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText >R$ {formattedItemsTotal} </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText >R$ {formatDeliveryPrice} </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal} 
        </RegularText>
      </div>

      <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
    </ConfirmationSectionContainer>
  )
}