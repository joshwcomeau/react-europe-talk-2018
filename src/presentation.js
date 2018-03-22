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
import spaceJamSrc from './assets/space-jam.png';
import internetExplorerSrc from './assets/internet-explorer.gif';
import mcdonaldsSrc from './assets/mcdonalds.gif';

import Hierarchy from './components/Hierarchy';

import Title from './slides/Title';
import WhoAmI from './slides/WhoAmI';
import WishTheInternet from './slides/WishTheInternet';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#FFFFFF',
    secondary: '#222222',
    purple: COLORS.purple[500],
    pink: COLORS.pink[500],
    blue: COLORS.blue[500],
    red: COLORS.red[500],
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
        <Slide bgImage={titleBgSrc}>
          <Title />
        </Slide>

        <Slide>
          <WhoAmI />
        </Slide>

        <Slide>
          <WishTheInternet />
        </Slide>

        <Slide
          bgImage={spaceJamSrc}
          notes={`
          I started using the internet in the 90s, and at that time, the internet looked like this.

          (This website, incidentally, still exists, and works perfectly.)
        `}
        />

        <Slide
          bgImage={internetExplorerSrc}
          notes={`
            Here's another example of a classic 90s website, this one I think remains relevant for web developers.

            The animated flame GIFs really sell it.

            The great thing about the 90s internet is that nobody knew what they were doing.
          `}
        />
        <Slide
          bgImage={mcdonaldsSrc}
          notes={`
            This is actually McDonald's website, circa November 1996.

            It might be hard to tell, but the golden arches GIF features a cleaner who pops out to give it a quick polish.

            Web technologies were essentially nonexistent at this time. Javascript was less than a year old, CSS wouldn't show up for another year. And yet, websites still had plenty of animation, in the form of the animated GIF.

            The tooling has vastly improved since then, and the web products we build are undeniably much much better. But we've lost some of the charm of the new web.
          `}
        />

        <Slide>
          <Hierarchy
            height="90%"
            levels={[
              'Does it even load',
              'Does it work',
              'Is it accessible',
              'Is it usable',
              'Does it\nspark joy',
            ]}
          />
        </Slide>
      </Deck>
    );
  }
}
