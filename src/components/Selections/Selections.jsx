import React from 'react';

import DataSelectios from '../../Data/Selections.json';
import { BoxSelection, SelectionsItems, SelectionsStyled } from './Selections.Styled';

const Selections = () => (
  <SelectionsStyled clasnName="">
    <SelectionsItems>
      {
        DataSelectios.slice(0, 5).map(item => <BoxSelection key={item.id}>{item.title}</BoxSelection>)
      }
    </SelectionsItems>
  </SelectionsStyled>
);

export default Selections;
