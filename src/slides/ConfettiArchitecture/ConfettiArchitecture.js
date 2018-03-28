import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import CenteredColumns from '../../components/CenteredColumns';

class ConfettiArchitecture extends Component {
  render() {
    return (
      <div style={{ marginLeft: -100, marginRight: -100 }}>
        <CenteredColumns>
          <ComponentBox
            color={COLORS.pink[700]}
          >{`<Particles />`}</ComponentBox>

          <ComponentBox
            color={COLORS.deepPurple[700]}
          >{`<Confetti />`}</ComponentBox>

          <ComponentBox color={COLORS.indigo[700]}>{`<Canvas />`}</ComponentBox>
        </CenteredColumns>
      </div>
    );
  }
}

const ComponentBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.15);
  background-color: ${props => props.color};
  color: white;
  font-size: 30px;
  font-family: consolas, monospace;
`;

export default ConfettiArchitecture;
