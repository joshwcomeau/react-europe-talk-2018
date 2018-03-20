import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

class Link extends Component {
  render() {
    return <Anchor target="_blank" rel="noopener noreferrer" {...this.props} />;
  }
}

const Anchor = styled.a`
  color: ${COLORS.blue[400]};
  text-decoration: none;
`;

export default Link;
