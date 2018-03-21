import React, { Component } from 'react';
import { Text, Heading } from 'spectacle';
import styled, { keyframes } from 'styled-components';

class WhoAmI extends Component {
  render() {
    return (
      <div>
        <WavingHand>👋</WavingHand>
        <br />
        <br />
        <br />
        <Heading textFont="secondary" textColor="purple">
          Hi, I'm Josh.
        </Heading>
        <br />

        <Heading textColor="pink" size={4}>
          I work at Khan Academy.
        </Heading>
      </div>
    );
  }
}

const rotating = keyframes`
  from {
    transform: rotate(60deg);
  }

  to {
    transform: rotate(15deg);
  }
`;

const WavingHand = styled.div`
  display: inline-block;
  font-size: 160px;
  animation: ${rotating} 600ms ease-in-out alternate infinite;
  transform-origin: 60% 60%;
`;

export default WhoAmI;
