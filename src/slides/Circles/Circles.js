import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import WibblyWobblyCircle from '../../components/WibblyWobblyCircle';

class Circles extends Component {
  render() {
    return (
      <Wrapper>
        <WibblyWobblyCircle
          color={COLORS.purple[500]}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
`;

export default Circles;
