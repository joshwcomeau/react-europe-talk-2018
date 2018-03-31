import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';

class CanvasCode extends Component {
  render() {
    return (
      <CodeSlide
        slideIndex={23}
        bgColor="secondary"
        lang="js"
        code={require('./CanvasCode.example')}
        ranges={[
          { loc: [0, 50], title: '<Canvas />' },
          { loc: [4, 9] },
          { loc: [35, 46] },
          { loc: [11, 13] },
          { loc: [14], note: 'Heres a note!' },
          { loc: [23, 34] },
          { loc: [16] },
          { loc: [19, 22] },
        ]}
      />
    );
  }
}

export default CanvasCode;
