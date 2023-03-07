import styled from 'styled-components';

export const StyledCheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemName = styled.span`
  width: 23%;
`;

export const CheckoutItemPrice = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantity = styled.div`
  display: flex;
  width: 23%;

  &:nth-child(1),
  &:nth-child(3) {
    cursor: pointer;
  }

  &:nth-child(2) {
    margin: 0 10px;
  }
`;

export const CheckoutItemRemove = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
