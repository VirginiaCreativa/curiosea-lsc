import React from 'react';
import styled from 'styled-components';

import DataSelectios from '../../Data/Selections.json';

const SelectionsStyled = styled.div`
  margin: 60px 0;
`;

const SelectionsItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
`;

const BoxSelection = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
`;
const Selections = () => (
  <SelectionsStyled clasnName="">
    <SelectionsItems>
      {
        DataSelectios.slice(0, 4).map(item => <BoxSelection key={item.id}>{item.title}</BoxSelection>)
      }
    </SelectionsItems>
  </SelectionsStyled>
);

export default Selections;
