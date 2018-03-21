import React, { Component } from 'react';

const INTERNAL_WIDTH = 100;
const INTERNAL_HEIGHT = 86.6;

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];

class Hierarchy extends Component {
  static defaultProps = {
    levels: [],
  };

  state = {
    selectedLevelIndex: null,
  };

  calculatePolygonPointsArray = () => {
    const { selectedLevelIndex } = this.state;

    return this.props.levels.map((levelCopy, index) => {
      // HACK: The math only works atm if `numOfLevels` is 5.
      const numOfLevels = this.props.levels.length;

      const hasSelection = typeof selectedLevelIndex === 'number';

      const isSelected = index === selectedLevelIndex;

      const equallyDividedSegmentHeight = INTERNAL_HEIGHT / numOfLevels;

      // TODO: Allow this to work regardless of `numOfLevels`
      const selectedSegmentHeight = equallyDividedSegmentHeight * 2;
      const unselectedSegmentHeight = segmentHeight * 0.75;

      let segmentHeight;
      if (hasSelection) {
        // If a level is selected, they don't simply use the equally-divided
        // heights. Instead, the selected node takes up twice as much space,
        // while other nodes shrink a bit to compensate.
        segmentHeight = isSelected
          ? selectedSegmentHeight
          : unselectedSegmentHeight;
      } else {
        segmentHeight = equallyDividedSegmentHeight;
      }

      let y1;
      if (index === 0) {
        // The first row is always going to be at 0.
        // (well, INTERNAL_HEIGHT, since our coordinates are from the top)
        y1 = INTERNAL_HEIGHT;
      } else {
        if (isSelected) {
          if (index === numOfLevels - 1) {
            // If the top one is selected, it can't squeeze to the top,
            // so it squeezes entirely to the bottom
            y1 = INTERNAL_HEIGHT - selectedSegmentHeight;
          } else {
            y1 = INTERNAL_HEIGHT - index * unselectedSegmentHeight;
          }
        } else if (hasSelection && index < selectedLevelIndex) {
          // If it's below the selected one, we can just add up the heights of
          // all previous unselected ones.
          y1 = INTERNAL_HEIGHT - index * unselectedSegmentHeight;
        } else if (hasSelection && index > selectedLevelIndex) {
          // If it's above the selected one, it's a bit trickier, since we need
          // to add the selected height, along with the heights of the other
          // unselected ones (if any).
          y1 =
            INTERNAL_HEIGHT -
            selectedSegmentHeight -
            (index - 1) * unselectedSegmentHeight;
        } else {
          // Finally, this is the case where there are no selected nodes.
          // This is easy.
          y1 = INTERNAL_HEIGHT - index * equallyDividedSegmentHeight;
        }
      }

      const y2 = y1 - segmentHeight;
      const y3 = y2;
      const y4 = y1;

      // For the X coords, we can figure it out based on our Y coords.
      // First, figure out what % of the way through the Y axis our y1 coord is.
      const y1Percentage = y1 / INTERNAL_HEIGHT;

      // Our x1 is going to be equal to the equivalent percentage, but halved,
      // since we only want to concern ourself with the first half of the
      // triangle shape.
      const x1 = (1 - y1Percentage) * 0.5 * INTERNAL_WIDTH;

      // Repeat for x2
      const y2Percentage = y2 / INTERNAL_HEIGHT;

      const x2 = (1 - y2Percentage) * 0.5 * INTERNAL_WIDTH;

      const x3 = INTERNAL_WIDTH - x2;
      const x4 = INTERNAL_WIDTH - x1;

      return { x1, y1, x2, y2, x3, y3, x4, y4 };
    });
  };

  handleMouseEnter = i => {
    this.setState({ selectedLevelIndex: i });
  };

  generatePointsString = ({ x1, y1, x2, y2, x3, y3, x4, y4 }) => {
    return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`;
  };

  render() {
    const polygonPointsArray = this.calculatePolygonPointsArray();

    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        style={{ maxHeight: 620 }}
        viewBox={`0 0 ${INTERNAL_WIDTH} ${INTERNAL_HEIGHT}`}
      >
        {polygonPointsArray.map((polygonPoints, index) => (
          <polygon
            key={index}
            onMouseEnter={() => this.handleMouseEnter(index)}
            points={this.generatePointsString(polygonPoints)}
            fill={COLORS[index]}
          />
        ))}
      </svg>
    );
  }
}

export default Hierarchy;
