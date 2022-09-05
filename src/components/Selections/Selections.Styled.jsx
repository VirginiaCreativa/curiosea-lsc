import styled from 'styled-components';

export const SelectionsStyled = styled.div`
  margin: 60px 0;
`;

export const SelectionsItems = styled.div`
position: relative;
  display: inline-grid;
  grid-template-columns: repeat(6, 1fr);
  height: 200px;
  gap: 60px;
`;

export const BoxSelection = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 2%;
    bottom: -10px;
    background-color: #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 96%;
    height: 60px;
    margin: 0 auto;
  }
`;
