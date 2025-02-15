import { useAppDispatch } from "Hooks/hooks";
import { Product } from "Models/product";
import { addProductCart, removeOneProductCart } from "Store/Modules/Cart/reducers";
import styled from "styled-components";

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.small`
  color: black;
  font-size: 10px;
`;

const ValueWrapper = styled.span`
  color: black;
  border-top: 1px solid #00000020;
  border-bottom: 1px solid #00000020;
  font-size: 14px;
  padding: 0px 5px;
`;

const QtdButtonLeft = styled.button`
  border: 1px solid #00000020;
  background-color: white;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

const QtdButtonRight = styled.button`
  border: 1px solid #00000020;
  background-color: white;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

const Controllers = styled.div`
  width: 80px;
  min-width: 80px;
  max-width: 80px;
`;

interface IQtdInput {
  product: Product,
  amount: number
}
function QtdInput({ product, amount }: IQtdInput) {

  const dispatch = useAppDispatch();

  function removeProduct() {
    dispatch(removeOneProductCart(product));
  }

  function addProduct() {
    dispatch(addProductCart(product));
  }

  return (
    <Input>
      <InputTitle>Qtd:</InputTitle>
      <Controllers>
        <QtdButtonLeft onClick={removeProduct}>-</QtdButtonLeft>
        <ValueWrapper>{amount}</ValueWrapper>
        <QtdButtonRight onClick={addProduct}>+</QtdButtonRight>
      </Controllers>
    </Input>
  )
}

export default QtdInput;