// @flow
import React, { PureComponent, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  isFolded: boolean,
  front: React$Element<*>,
  back: React$Element<*>,
  duration: number,
  onCompleteFolding: () => void,
};

class Foldable extends PureComponent<Props> {
  static defaultProps = {
    duration: 1000,
  };

  node: ?HTMLElement;
  finalFoldNode: ?HTMLElement;

  componentDidUpdate(prevProps: Props) {
    const { isFolded, onCompleteFolding } = this.props;

    const foldIsStarting = !prevProps.isFolded && isFolded;

    if (foldIsStarting && this.finalFoldNode) {
      this.finalFoldNode.addEventListener('animationend', onCompleteFolding);
    }
  }

  componentWillUnmount() {
    const { onCompleteFolding } = this.props;

    if (!this.finalFoldNode) {
      return;
    }

    this.finalFoldNode.removeEventListener('animationend', onCompleteFolding);
  }

  renderOriginal() {
    const { front, isFolded } = this.props;

    return (
      <div
        ref={node => {
          this.node = node;
        }}
        style={{
          opacity: isFolded ? 0 : 1,
        }}
      >
        {front}
      </div>
    );
  }

  renderFoldedCopy() {
    const { back, duration } = this.props;
    const { node } = this;

    if (!node) {
      return;
    }

    const { top, left, width, height } = node.getBoundingClientRect();

    const foldHeights = [height * 0.35, height * 0.35, height * 0.3];

    return (
      <Wrapper
        style={{
          top: 0,
          left: 0,
          width,
          height,
        }}
      >
        <TopFold
          innerRef={node => {
            this.finalFoldNode = node;
          }}
          duration={duration}
          foldHeight={foldHeights[0]}
        >
          <HideOverflow>
            <TopFoldContents
              foldHeight={foldHeights[0]}
              dangerouslySetInnerHTML={{
                __html: node.outerHTML,
              }}
            />
          </HideOverflow>
          <TopFoldBack>{back}</TopFoldBack>
        </TopFold>

        <MiddleFold foldHeight={foldHeights[1]} offsetTop={foldHeights[0]}>
          <HideOverflow>
            <MiddleFoldContents
              offsetTop={foldHeights[0]}
              dangerouslySetInnerHTML={{
                __html: node.outerHTML,
              }}
            />
          </HideOverflow>
        </MiddleFold>

        <BottomFold
          duration={duration}
          foldHeight={foldHeights[2]}
          offsetTop={foldHeights[0] + foldHeights[1]}
        >
          <HideOverflow>
            <BottomFoldContents
              offsetTop={foldHeights[0] + foldHeights[1]}
              dangerouslySetInnerHTML={{
                __html: node.outerHTML,
              }}
            />
          </HideOverflow>
          <BottomFoldBack />
        </BottomFold>
      </Wrapper>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderOriginal()}
        {this.props.isFolded && this.renderFoldedCopy()}
      </Fragment>
    );
  }
}

const foldTopDown = keyframes`
  from {
    transform-origin: bottom center;
    transform: 
      perspective(1000px) rotateX(0deg);
  }
  to {
    transform-origin: bottom center;
    transform: 
      perspective(1000px) rotateX(-180deg);
  }
`;

const foldBottomUp = keyframes`
  from {
    transform-origin: top center;
    transform: 
      perspective(1000px) rotateX(0deg);
  }
  to {
    transform-origin: top center;
    transform: 
      perspective(1000px) rotateX(180deg);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 10000;
`;

const FoldBase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

const TopFold = styled(FoldBase)`
  z-index: 3;
  top: 0;
  height: ${p => Math.round(p.foldHeight)}px;
  animation: ${foldTopDown} ${p => p.duration * 0.8}ms forwards
    ${p => p.duration * 0.33}ms;
  transform-style: preserve-3d;
`;

const MiddleFold = styled(FoldBase)`
  z-index: 1;
  top: ${p => Math.round(p.offsetTop)}px;
  height: ${p => Math.round(p.foldHeight)}px;
`;

const BottomFold = styled(FoldBase)`
  z-index: 2;
  top: ${p => Math.round(p.offsetTop)}px;
  height: ${p => Math.round(p.foldHeight)}px;
  animation: ${foldBottomUp} ${p => p.duration}ms forwards;
  transform-style: preserve-3d;
`;

const HideOverflow = styled.div`
  position: relative;
  height: 100%;
  z-index: 2;
  overflow: hidden;
`;

const TopFoldContents = styled.div`
  backface-visibility: hidden;
`;
const MiddleFoldContents = styled.div`
  position: relative;
  z-index: 2;
  height: ${p => p.height}px;
  transform: translateY(${p => Math.round(p.offsetTop) * -1}px);
`;
const BottomFoldContents = styled.div`
  position: relative;
  z-index: 2;
  height: ${p => p.height}px;
  transform: translateY(${p => Math.round(p.offsetTop) * -1}px);
  backface-visibility: hidden;
`;

const TopFoldBack = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateX(180deg);
  background: rgba(255, 255, 255, 0.95);
  backface-visibility: hidden;
`;

const BottomFoldBack = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateX(180deg);
  background: rgba(255, 255, 255, 0.95);
  backface-visibility: hidden;
  box-shadow: 0px -30px 50px -20px rgba(0, 0, 0, 0.2);
`;

export default Foldable;
