import React, { Component } from 'react';

class EmbeddedVideo extends Component {
  static defaultProps = {
    width: 394,
    height: 700,
  };

  render() {
    const { src, width, height } = this.props;

    return (
      <iframe
        src={src}
        width={width}
        height={height}
        frameborder="0"
        allowfullscreen
      />
    );
  }
}

export default EmbeddedVideo;
