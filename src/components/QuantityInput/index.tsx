import { IconWrapper, QuantityInputContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  size?: "medium" | "small"
}

export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
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