import { Container } from "./styles";

export interface ModalProps {
  isOpen: boolean;
}

export default function FoodExplorerModal({ isOpen }: ModalProps) {

  if(isOpen) {
    return (
      <Container>
        modal
      </Container>
    )
  }

  return null;
}
