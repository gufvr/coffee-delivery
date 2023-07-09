import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import deliveryman from "../../assets/deliveryman.svg"
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado 🎉</TitleText>
        <RegularText size="l">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon 
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua José Bueno de Matos, 106</strong>
                <br />
                Sorocaba - São Paulo, SP
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]} 
            text={
              <RegularText>
                Previsão de entrega
                <br /> 
                <strong>20 min - 30 min </strong>
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]} 
            text={
              <RegularText>
                Pagamento na entrega
                < br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={deliveryman}  />
      </section>
    </OrderConfirmedContainer>
  )
}