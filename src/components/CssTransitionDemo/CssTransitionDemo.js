import React, { Component } from 'react';
import Highlight from 'react-highlight';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const CSS_SNIPPETS = {
  Fade: `.item {
  opacity: 0.5;
  transition: 
    opacity 300ms;
}

.item:hover {
  opacity: 1
}`,
  Grow: `.item {
  transform: scale(1);
  transition: 
    transform 300ms;
}

.item:hover {
  transform: scale(1.1)
}`,
};

class CssTransitionDemo extends Component {
  render() {
    const snippets = Object.entries(CSS_SNIPPETS);

    return (
      <Wrapper>
        {snippets.map(([snippetKey, snippet]) => (
          <Column>
            <Highlight className="css">{snippet}</Highlight>

            <DemoArea>
              <DemoBox effect={snippetKey.toLowerCase()}>{snippetKey}</DemoBox>
            </DemoArea>
          </Column>
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-top: -2em;
`;

const Column = styled.div`
  flex-basis: 50%;

  &:first-of-type {
    margin-right: 25px;
  }
`;

const DemoArea = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const DemoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: auto;
  font-size: 48px;
  font-family: 'Playfair Display';
  background: ${props =>
    props.effect === 'fade' ? COLORS.teal[700] : COLORS.amber[700]};

  opacity: ${props => (props.effect === 'fade' ? 0.5 : 1)};
  transform: scale(1);
  transition: 300ms;
  cursor: default;

  &:hover {
    opacity: 1;
    transform: ${props =>
      props.effect === 'grow' ? 'scale(1.15)' : 'scale(1)'};
  }
`;

export default CssTransitionDemo;
