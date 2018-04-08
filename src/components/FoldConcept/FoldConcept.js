// @flow
import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

import colorfulArrowsSrc from '../../assets/colorful-arrows.jpg';

import Button from '../Button';
import Link from '../Link';

type Props = {};

type State = {
  // 0 - initialized
  // 1 - skewed to the left
  // 2 - indented
  // 3 - folded
  step: 0 | 1 | 2 | 3,
  hoveredIndex: ?number,
};

const rotationTop = keyframes`
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(-179deg);
  }

  100% {
    transform: rotateX(0deg);
  }
`;

const rotationBottom = keyframes`
  0% {
    transform: rotateX(0deg);
  }

  45% {
    transform: rotateX(179.99deg);
  }

  75% {
    transform: rotateX(179.99deg);
  }

  100% {
    transform: rotateX(0deg);
  }
`;

class FoldConcept extends Component<Props, State> {
  state = {
    step: 0,
    hoveredIndex: null,
  };

  incrementStep = () => {
    this.setState(state => ({
      // $FlowFixMe
      step: (state.step + 1) % 4,
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
          <Rotator side="top" animation={rotationTop} rotating={step > 2}>
            <Top
              indented={step === 2}
              translucent={isHoveringOnSomething && hoveredIndex !== 0}
              onMouseEnter={() => this.handleMouseEnter(0)}
              onMouseLeave={this.handleMouseLeave}
            >
              <HideOverflow>
                <img src={colorfulArrowsSrc} />
              </HideOverflow>
            </Top>
          </Rotator>
          <Middle
            indented={step === 2}
            translucent={isHoveringOnSomething && hoveredIndex !== 1}
            onMouseEnter={() => this.handleMouseEnter(1)}
            onMouseLeave={this.handleMouseLeave}
          >
            <HideOverflow>
              <img src={colorfulArrowsSrc} />
            </HideOverflow>
          </Middle>
          <Rotator side="bottom" animation={rotationBottom} rotating={step > 2}>
            <Bottom
              indented={step === 2}
              translucent={isHoveringOnSomething && hoveredIndex !== 2}
              onMouseEnter={() => this.handleMouseEnter(2)}
              onMouseLeave={this.handleMouseLeave}
            >
              <HideOverflow>
                <img src={colorfulArrowsSrc} />
              </HideOverflow>
            </Bottom>
          </Rotator>
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

const Rotator = styled.div`
  animation: ${props =>
    props.rotating && `${props.animation} 3s ease infinite`};
  animation-delay: ${props => props.side === 'top' && '400ms'};
  transform-origin: ${props =>
    props.side === 'top' ? 'bottom center' : 'top center'};
  transform-style: preserve-3d;
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
  height: 180px;
  width: 364px;
  transition: opacity 500ms, transform 1000ms;
  opacity: ${props => (props.translucent ? 0.2 : 1)};

  img {
    height: 600px;
  }
`;

const Top = styled(Section)`
  height: 210px;
  z-index: 3;
  transform: ${props =>
    props.indented && 'perspective(1000px) translate3d(0, -20px, 60px)'};
`;

const Middle = styled(Section)`
  height: 210px;
  z-index: 2;

  img {
    transform: translateY(-210px);
  }
`;

const Bottom = styled(Section)`
  height: 180px;
  z-index: 1;
  transform: ${props =>
    props.indented && 'perspective(1000px) translate3d(0, 20px, -60px)'};

  img {
    transform: translateY(-420px);
  }
`;

export default FoldConcept;
