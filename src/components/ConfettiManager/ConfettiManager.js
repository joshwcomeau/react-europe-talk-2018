import React, { Component } from 'react';
import styled from 'styled-components';

import Confetti from '../Confetti';

class ConfettiManager extends Component {
  render() {
    return (
      <Wrapper onClick={this.handleStart}>
        <Confetti
          ref={elem => (this.confettiElem = elem)}
          width={920}
          height={700}
          onClick={() => this.confettiElem.generateParticles()}
          onComplete={this.handleComplete}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  outline: 1px solid;
`;

export default ConfettiManager;
