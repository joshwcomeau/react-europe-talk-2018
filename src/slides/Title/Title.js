import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, Heading } from 'spectacle';

import Spacer from '../../components/Spacer';
import Link from '../../components/Link';

class Title extends Component {
  render() {
    return (
      <Wrapper>
        <Subtitle>The Case For</Subtitle>
        <Heading
          size={1}
          textColor="black"
          textFont="secondary"
          textAlign="left"
        >
          Whimsy
        </Heading>

        <Spacer size={450} />
        <Right>
          <Blocker>
            <Text textSize={16} textColor="primary">
              Photo by{' '}
              <Link light href="https://unsplash.com/photos/j8ALUFYy7aY">
                Sharon McCutcheon
              </Link>
            </Text>
          </Blocker>
        </Right>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Subtitle = styled.div`
  font-size: 2.66rem;
  font-weight: 300;
  text-align: left;
  color: #222;
`;

const Right = styled.div`
  text-align: right;
`;

const Blocker = styled.span`
  display: inline-block;
  background: rgba(0, 0, 0, 0.45);
  padding: 5px 15px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

export default Title;
