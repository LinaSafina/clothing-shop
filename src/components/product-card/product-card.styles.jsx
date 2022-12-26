import styled from 'styled-components';

export const ProductItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    top: 255px;
    display: none;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  &:hover {
    button {
      opacity: 0.85;
      display: block;
    }

    img {
      opacity: 0.7;
    }
  }
`;

export const ProductText = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.span`
  width: 10%;
`;
