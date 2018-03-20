import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { COLORS } from './constants';
import titleBgSrc from './assets/sprinkles.jpg';
import Title from './components/Title';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#222222',
    purple: COLORS.purple[500],
    pink: COLORS.pink[500],
    blue: COLORS.blue[400],
  },
  {
    primary: 'Lato',
    secondary: 'Playfair Display',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide
          transition={['slide']}
          bgImage={titleBgSrc}
          margin={1}
          style={{ width: '100%', height: '100%' }}
        >
          <Title />
        </Slide>
      </Deck>
    );
  }
}
