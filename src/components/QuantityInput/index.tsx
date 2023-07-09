import { IconWrapper, QuantityInputContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({ 
  onIncrease, 
  onDecrease, 
  quantity, 
  size = 'medium' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus weight="fill" size={14} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus weight="fill" size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}