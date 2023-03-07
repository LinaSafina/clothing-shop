import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCategoryPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const CategoryPreviewList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
