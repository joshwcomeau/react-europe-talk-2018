import React, { Component } from 'react';
import styled from 'styled-components';

class Underlined extends Component {
  render() {
    const { children, ...delegated } = this.props;

    return <Wrapper {...delegated}>{children}</Wrapper>;
  }
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    background-color: currentColor;
    height: 4px;
  }
`;

export default Underlined;
