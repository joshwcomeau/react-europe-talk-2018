import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Text, Heading } from 'spectacle';

import TitleParticles from '../../components/TitleParticles';

class Title extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Subtitle>The Case For</Subtitle>
          <Heading
            textColor="primary"
            textFont="secondary"
            style={{ fontSize: '9.25rem' }}
          >
            Whimsy
          </Heading>
        </Wrapper>
        <TitleParticles />
      </Fragment>
    );
  }
}

const Wrapper = styled.div`
  text-shadow: 3px 3px 3px rgba(80, 13, 142, 0.25);
`;

const Subtitle = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
  color: white;
`;

export default Title;
