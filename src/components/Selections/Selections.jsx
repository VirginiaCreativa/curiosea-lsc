import React from 'react';

import TitleHeadign from '../../common/Sections/SectionHeadingTitle';
import DataSelectios from '../../Data/Selections.json';
import { BoxSelection, SelectionsItems, SelectionsStyled } from './Selections.Styled';


const Selections = () => (
  <>
    <TitleHeadign title="Aprender Ya!" />
    <SelectionsStyled classnName="">
      <SelectionsItems>
        {
          DataSelectios.slice(0, 6).map(item => <BoxSelection key={item.id}>{item.title}</BoxSelection>)
        }
      </SelectionsItems>
    </SelectionsStyled>
  </>
);

export default Selections;
