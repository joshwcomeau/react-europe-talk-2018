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
import mcdonaldsSrc from './assets/mcdonalds-full.gif';
import mcdonaldsZoomSrc from './assets/mcdonalds-zoom.gif';
import mcdonaldsNowSrc from './assets/mcdonalds-now.png';
import jesseSkiingSrc from './assets/jesse-skiing.jpg';
import cameronsWorldSrc from './assets/camerons-world.gif';
import jsWordCloudSrc from './assets/js-word-cloud.png';
import whimsyDefinitionSrc from './assets/whimsy-definition.png';
import moleskineBallsSrc from './assets/moleskine-balls.gif';
import flipbookSrc from './assets/flipbook.gif';
import facebookCongratsSrc from './assets/facebook-congrats.gif';
import confettiMockupSrc from './assets/confetti-mockup.png';
import khanConfettiSrc from './assets/khan-confetti.gif';
import askJeevesSrc from './assets/ask-jeeves.gif';

import Hierarchy from './components/Hierarchy';
import CssTransitionDemo from './components/CssTransitionDemo';
import ConfettiManager from './components/ConfettiManager';

import Title from './slides/Title';
import WhoAmI from './slides/WhoAmI';
import WishTheInternet from './slides/WishTheInternet';

require('normalize.css');
require('highlight.js/styles/arta.css');

const theme = createTheme(
  {
    primary: '#FFFFFF',
    secondary: '#222222',
    purple: COLORS.purple[500],
    deepPurple: COLORS.deepPurple[700],
    pink: COLORS.pink[500],
    blue: COLORS.blue[500],
    red: COLORS.red[500],
    green: COLORS.green[700],
    teal: COLORS.teal[700],
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
          bgImage={jesseSkiingSrc}
          notes={`
            I started using the internet in the 90s, and at that time, the internet looked like this.<br /><br />
        `}
        />

        <Slide
          bgImage={askJeevesSrc}
          notes={`
            Anyone remember Ask Jeeves? I remember never getting any useful answers out of him, but I found the experience delightful nonetheless.<br /><br />

            Web developers had one tool, and one tool only, for animation...
          `}
        />

        <Slide
          bgImage={cameronsWorldSrc}
          notes={`
            The animated GIF.<br/><br />

            The cool thing about this golden era of the web is that nobody knew what they were doing.
          `}
        />

        <Slide
          bgImage={mcdonaldsSrc}
          notes={`
            This is actually McDonald's website, circa early 1997.
          `}
        />

        <Slide
          bgImage={mcdonaldsZoomSrc}
          notes={`
            Check it out, there's a little man popping out from behind the golden arches to give them a quick polish.<br /><br />

            Web technologies were essentially nonexistent at this time. Javascript was less than a year old, CSS wouldn't show up for another year. We built documents, and embedded animated GIFs for flavor.<br /><br />
          `}
        />

        <Slide
          bgImage={mcdonaldsNowSrc}
          notes={`
            By contrast, here's McDonald's website today, 20+ years later.<br /><br />

            I think most people would agree that this is better, right? There's a ton more info, there's good photos, you can even order it online (I had delivery mcdonalds and it was thoroughly unsettling).

            And yet, this website is bland. It's exactly what it needs to be, and nothing more. I miss the whimsical charm of their old site.
          `}
        />

        <Slide
          notes={`
            When I say "whimsy", here's what I mean.<br /><br />

            "An unexpected flourish that sparks joy". It's not stuff that is critical to the usability of your product, but it's something that makes your users smile, something that makes your product a little more enjoyable to use.<br /><br />
          `}
        >
          <img src={whimsyDefinitionSrc} style={{ width: '100%' }} />
        </Slide>

        <Slide
          notes={`
            That definition is very broad!<br /><br />

            Let's narrow it down to only talk about interactions and animation.
            <br /><br />

            I chose this scope for a few reasons:<br />
            - It's what we have the most control over, as developers<br />
            - It's woefully underdeveloped on web.<br />
            - "fun problems". interesting technically.<br />
            - It has huge potential to delight<br />
          `}
        >
          <Heading textColor="teal">This is a big topic!</Heading>
          <br />
          <br />
          <Heading textColor="green" size={4}>
            Let's focus on<br />interactions and animation.
          </Heading>
        </Slide>

        <Slide>
          <Heading
            textAlign="left"
            textFont="secondary"
            size={2}
            textColor="purple"
          >
            This isn't a lost art!
          </Heading>
          <br />
          <br />

          <Heading
            textAlign="left"
            textFont="secondary"
            size={3}
            textColor="pink"
          >
            There's still plenty of whimsy in mobile apps.
          </Heading>
        </Slide>

        <Slide>
          <img src={moleskineBallsSrc} style={{ width: '100%' }} />
        </Slide>

        <Slide>
          <img src={flipbookSrc} />
        </Slide>

        <Slide>
          <img src={facebookCongratsSrc} style={{ height: '100%' }} />
        </Slide>

        <Slide>
          <Heading textFont="secondary" size={2} textColor="blue">
            Let's explore some of these techniques, in React!
          </Heading>
        </Slide>

        <Slide bgColor="teal">
          <Heading
            size={6}
            textColor="primary"
            style={{ opacity: 0.7, fontWeight: 500 }}
          >
            Example 1
          </Heading>
          <Heading size={1} textColor="primary" textFont="secondary">
            Confetti
          </Heading>
          <br />
          <br />
          <br />
        </Slide>

        <Slide bgColor="secondary" transition={['fade']}>
          <img src={confettiMockupSrc} style={{ width: '100%' }} />
        </Slide>

        <Slide bgColor="secondary" transition={['fade']}>
          <img src={khanConfettiSrc} style={{ width: '100%' }} />
        </Slide>

        <Slide>
          <ConfettiManager />
        </Slide>
      </Deck>
    );
  }
}
