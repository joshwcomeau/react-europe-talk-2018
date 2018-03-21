import React, { Component } from 'react';

const INTERNAL_WIDTH = 100;
const INTERNAL_HEIGHT = 86.6;

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];

class Hierarchy extends Component {
  static defaultProps = {
    levels: [],
  };

  drawLevel = (levelCopy, index) => {
    const numOfLevels = this.props.levels.length;

    const xDeltaWidth = INTERNAL_WIDTH / (numOfLevels * 2);
    const segmentHeight = INTERNAL_HEIGHT / numOfLevels;

    const x1 = xDeltaWidth * index;
    const y1 = INTERNAL_HEIGHT - segmentHeight * index;

    const x2 = xDeltaWidth * (index + 1);
    const y2 = INTERNAL_HEIGHT - segmentHeight * (index + 1);

    const x3 = INTERNAL_WIDTH - x2;
    const y3 = y2;

    const x4 = INTERNAL_WIDTH - x1;
    const y4 = y1;

    return (
      <polygon
        points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} `}
        fill={COLORS[index]}
      />
    );
  };

  render() {
    return (
      <svg
        width={this.props.width}
        viewBox={`0 0 ${INTERNAL_WIDTH} ${INTERNAL_HEIGHT}`}
      >
        {this.props.levels.map(this.drawLevel)}
      </svg>
    );
  }
}

export default Hierarchy;
