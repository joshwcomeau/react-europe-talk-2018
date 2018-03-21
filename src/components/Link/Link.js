import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

class Link extends Component {
  render() {
    return <Anchor target="_blank" rel="noopener noreferrer" {...this.props} />;
  }
}

const Anchor = styled.a`
  color: ${props => (props.light ? COLORS.blue[100] : COLORS.blue[500])};
  text-decoration: none;
`;

export default Link;
