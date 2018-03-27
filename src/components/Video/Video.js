import React from 'react';

const Video = ({ videoId, width = 920, height = 620 }) => {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?loop=1&title=0&byline=0&portrait=0`}
      width={width}
      height={height}
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
  );
};

export default Video;
