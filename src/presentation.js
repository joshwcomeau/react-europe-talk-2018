import React, { Component } from 'react';
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
import preloader from 'spectacle/lib/utils/preloader';

import { COLORS } from './constants';
import titleBgSrc from './assets/sprinkles.jpg';
import askJeevesSrc from './assets/ask-jeeves.gif';
import mcdonaldsSrc from './assets/mcdonalds-full.gif';
import mcdonaldsZoomSrc from './assets/mcdonalds-zoom.gif';
import mcdonaldsNowSrc from './assets/mcdonalds-now.png';
import jesseSkiingSrc from './assets/jesse-skiing.jpg';
import cameronsWorldSrc from './assets/camerons-world.gif';
import whimsyDefinitionSrc from './assets/whimsy-definition.png';
import moleskineBallsSrc from './assets/moleskine-balls.gif';
import flipbookSrc from './assets/flipbook.gif';
import facebookCongratsSrc from './assets/facebook-congrats.gif';
import confettiMockupSrc from './assets/confetti-mockup.png';
import khanConfettiSrc from './assets/khan-confetti.gif';

import FullscreenImage from './components/FullscreenImage';
import Video from './components/Video';
import Hierarchy from './components/Hierarchy';
import CssTransitionDemo from './components/CssTransitionDemo';
import ConfettiManager from './components/ConfettiManager';

import Title from './slides/Title';
import WhoAmI from './slides/WhoAmI';
import WishTheInternet from './slides/WishTheInternet';

require('normalize.css');
require('highlight.js/styles/arta.css');


preloader({
  mcdonaldsSrc,
  mcdonaldsZoomSrc,
  mcdonaldsNowSrc,
  jesseSkiingSrc,
  askJeevesSrc,
  cameronsWorldSrc,
  whimsyDefinitionSrc,
  moleskineBallsSrc,
  flipbookSrc,
  facebookCongratsSrc,
  confettiMockupSrc,
  khanConfettiSrc,
});

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
    lime: COLORS.lime[700],
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
          bgColor="secondary"
          notes={`
            I started using the internet in the 90s, and at that time, the internet looked like this.<br /><br />
          `}
        >
          <FullscreenImage src={jesseSkiingSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            Anyone remember Ask Jeeves? I remember never getting any useful answers out of him, but I found the experience delightful nonetheless.<br /><br />

            Web developers had one tool, and one tool only, for animation...
          `}
        >
          <FullscreenImage src={askJeevesSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            The animated GIF.<br/><br />

            The cool thing about this golden era of the web is that nobody knew what they were doing.
          `}
        >
          <FullscreenImage src={cameronsWorldSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            This is actually McDonald's website, circa early 1997.
          `}
        >
          <FullscreenImage src={mcdonaldsSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['fade']}
          notes={`
          Check it out, there's a little man popping out from behind the golden arches to give them a quick polish.<br /><br />

          Web technologies were essentially nonexistent at this time. Javascript was less than a year old, CSS wouldn't show up for another year. We built documents, and embedded animated GIFs for flavor.
          `}
        >
          <FullscreenImage src={mcdonaldsZoomSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            By contrast, here's McDonald's website today, 20+ years later.<br /><br />

            I think most people would agree that this is better, right? There's a ton more info, there's good photos, you can even order it online (I had delivery mcdonalds and it was thoroughly unsettling).

            And yet, this website is bland. It's exactly what it needs to be, and nothing more. I miss the whimsical charm of their old site.
          `}
        >
          <FullscreenImage src={mcdonaldsNowSrc} />
        </Slide>

        <Slide
          notes={`
            When I say "whimsy", here's what I mean.<br /><br />

            "An unexpected flourish that sparks joy". It's not stuff that is critical to the usability of your product, but it's something that makes your users smile, something that makes your product a little more enjoyable to use.<br /><br />
          `}
        >
          <FullscreenImage src={whimsyDefinitionSrc} />
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
          <Heading size={2} textFont="secondary" textColor="purple">
            With this <br />
            <span style={{ color: COLORS.pink[500] }}>broad definition</span>,
            <br /> it's easy to find examples.
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Video videoId={261999187} />
        </Slide>

        <Slide bgColor="secondary">
          <Video videoId={261999178} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            I could spend the rest of my time up here talking about whimsical error pages, but it's not the most important thing to focus on.<br /><br />

            I chose this scope for a few reasons:<br />
            - It's what we have the most control over, as developers<br />
            - It's woefully underdeveloped on web.<br />
            - "fun problems". interesting technically.<br />
            - It has huge potential to delight<br />
          `}
        >
          <Heading size={3} textFont="secondary" textColor="pink">
            Let's focus on<br />
            <span style={{ color: COLORS.lime[500] }}>interaction</span> &{' '}
            <span style={{ color: COLORS.lime[500] }}>animation</span>.
          </Heading>
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            Timepage, a calendar app from Moleskine
          `}
        >
          <FullscreenImage src={moleskineBallsSrc} />
        </Slide>

        <Slide>
          <FullscreenImage portrait src={flipbookSrc} />
        </Slide>

        <Slide>
          <FullscreenImage portrait src={facebookCongratsSrc} />
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

        <Slide
          notes={`
            - Click to show
            - Increase scale to make it more visible for audience
            - Talk about how lifeless it is
            - Add spin
            - Add twist
            - add spin + twist
            - Add gravity
            - Mention the protip: Building something like this manager, to have a really short feedback loop between a parameter and its effects, is a great way to develop animations and interactions.
          `}
        >
          <ConfettiManager />
        </Slide>
      </Deck>
    );
  }
}
