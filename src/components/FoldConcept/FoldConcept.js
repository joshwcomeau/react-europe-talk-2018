// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import colorfulArrowsSrc from '../../assets/colorful-arrows.jpg';

import Button from '../Button';
import Link from '../Link';

type Props = {};

type State = {
  // 0 - initialized
  // 1 - skewed to the left
  // 2 - indented
  step: 0 | 1 | 2,
  hoveredIndex: ?number,
};

class FoldConcept extends Component<Props, State> {
  state = {
    step: 0,
    hoveredIndex: null,
  };

  incrementStep = () => {
    this.setState(state => ({
      // $FlowFixMe
      step: (state.step + 1) % 3,
    }));
  };

  handleMouseEnter = (index: number) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { step, hoveredIndex } = this.state;

    const isHoveringOnSomething = typeof hoveredIndex === 'number';

    console.log(step);

    return (
      <Wrapper>
        <Credit>
          Photo by Dimitri Popov on{' '}
          <Link href="https://unsplash.com/photos/WEVSu0CB2M4">Unsplash</Link>
        </Credit>

        <Content isSkewed={step > 0}>
          <Top
            indented={step > 1}
            translucent={isHoveringOnSomething && hoveredIndex !== 0}
            onMouseEnter={() => this.handleMouseEnter(0)}
            onMouseLeave={this.handleMouseLeave}
          >
            <HideOverflow>
              <img src={colorfulArrowsSrc} />
            </HideOverflow>
          </Top>
          <Middle
            indented={step > 1}
            translucent={isHoveringOnSomething && hoveredIndex !== 1}
            onMouseEnter={() => this.handleMouseEnter(1)}
            onMouseLeave={this.handleMouseLeave}
          >
            <HideOverflow>
              <img src={colorfulArrowsSrc} />
            </HideOverflow>
          </Middle>
          <Bottom
            indented={step > 1}
            translucent={isHoveringOnSomething && hoveredIndex !== 2}
            onMouseEnter={() => this.handleMouseEnter(2)}
            onMouseLeave={this.handleMouseLeave}
          >
            <HideOverflow>
              <img src={colorfulArrowsSrc} />
            </HideOverflow>
          </Bottom>
        </Content>
        <Button
          onClick={this.incrementStep}
          style={{ width: 200, marginTop: 50 }}
        >
          Next
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Credit = styled.div`
  margin-top: -40px;
  margin-bottom: 20px;
  font-size: 12px;
`;

const Content = styled.div`
  height: 600px;
  transform-style: preserve-3d;
  transform: ${props =>
    props.isSkewed && 'perspective(1000px) rotateY(-60deg);'};
  transition: transform 1000ms;
`;

const HideOverflow = styled.div`
  position: relative;
  height: 100%;
  z-index: 2;
  overflow: hidden;

  &:hover {
    overflow: visible;
  }
`;

const Section = styled.div`
  position: relative;
  height: 200px;
  width: 364px;
  transition: opacity 500ms, transform 1000ms;
  opacity: ${props => (props.translucent ? 0.2 : 1)};

  img {
    height: 600px;
  }
`;

const Top = styled(Section)`
  z-index: 3;
  transform: ${props =>
    props.indented && 'perspective(1000px) translate3d(0, -20px, 60px)'};
`;

const Middle = styled(Section)`
  z-index: 2;

  img {
    transform: translateY(-200px);
  }
`;

const Bottom = styled(Section)`
  z-index: 1;
  transform: ${props =>
    props.indented && 'perspective(1000px) translate3d(0, 20px, -60px)'};

  img {
    transform: translateY(-400px);
  }
`;

export default FoldConcept;
