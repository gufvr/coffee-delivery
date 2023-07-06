import { IconWrapper, QuantityInputContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus weight="fill" size={14} />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus weight="fill" size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}