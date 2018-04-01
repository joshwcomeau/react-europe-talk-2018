import React, { Component } from 'react';
import { VictoryTheme, VictoryAxis, VictoryScatter } from 'victory';
import styled from 'styled-components';

import { COLORS } from '../../constants';

class AbstractionScatter extends Component {
  render() {
    return (
      <Wrapper>
        <VictoryScatter
          style={{ data: { fill: COLORS.deepPurple[700] } }}
          size={9}
          data={[{ x: 1, y: 9 }, { x: 5, y: 5 }, { x: 8, y: 6 }]}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
  height: 450px;
  width: 650px;
  margin: auto;
  border-left: 4px solid ${COLORS.gray[500]};
  border-bottom: 4px solid ${COLORS.gray[500]};
`;

const ScatterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export default AbstractionScatter;
