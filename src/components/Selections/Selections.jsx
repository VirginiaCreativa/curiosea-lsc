import React from 'react';
import styled from 'styled-components';

import DataSelectios from '../../Data/Selections.json';

const SelectionsStyled = styled.div`
  display: flex;
`;

const Selections = () => (
  <SelectionsStyled clasnName="mx-auto">
    <div className="Selections_Item">
      {
        DataSelectios.map(item => <div key={item.id}>{item.title}</div>)
      }
    </div>
  </SelectionsStyled>
);

export default Selections;
