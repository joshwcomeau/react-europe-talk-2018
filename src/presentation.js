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
import CssTransitionDemo from './components/CssTransitionDemo';

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
    pink: COLORS.pink[500],
    blue: COLORS.blue[500],
    red: COLORS.red[500],
    green: COLORS.green[700],
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
          I started using the internet in the 90s, and at that time, the internet looked like this.<br /><br />

          (This website, incidentally, still exists, and works perfectly.)
        `}
        />

        <Slide
          bgImage={internetExplorerSrc}
          notes={`
            Here's another example of a classic 90s website, this one I think remains relevant for web developers.<br /><br />

            The animated flame GIFs really sell it.<br /><br />

            The great thing about the 90s internet is that nobody knew what they were doing.
          `}
        />
        <Slide
          bgImage={mcdonaldsSrc}
          notes={`
            This is actually McDonald's website, circa November 1996.<br /><br />

            It might be hard to tell, but the golden arches GIF features a cleaner who pops out to give it a quick polish.<br /><br />

            Web technologies were essentially nonexistent at this time. Javascript was less than a year old, CSS wouldn't show up for another year. And yet, websites still had plenty of animation, in the form of the animated GIF.<br /><br />

            The tooling has vastly improved since then, and the web products we build are undeniably much much better. But we've lost some of the charm of the new web.
          `}
        />

        <Slide
          notes={`
            I have a theory about why that is, and I've attempted to demonstrate it with a jiggly triangle.<br /><br />

            This is my take on Maslow's Hierarchy of Needs, from the perspective of product managers.<br /><br />
            
            At the base of the hierarchy, "does it even load". If the user goes to www.yourthing.com and they don't get an HTML page, the most basic need is not being met.<br /><br />

            "Does it work" refers to whether or not the "happy path" is possible, for the developers. When we test our site, does it work?<br /><br />

            "Is it accessible" is all about whether our real users can use it. I'm using the term 'accessible' broadly, to encompass folks with disabilities, but also folks on other browsers, with different network conditions, on mobile devices... Essentially, are the bottom two tiers being met for a wide variety of people.<br /><br />

            "Is it clear" is the UX tier; is the product easy to understand, can people accomplish the goals they have in a painless way?<br /><br />

            Finally, the top of the pyramid... I'd call this the "Is it delightful" tier. Does the product spark joy? Is it _enjoyable_ to use?<br /><br />

            The problem is that we're all working with limited time and resources. As deadlines approach and it becomes clear that not everything in our list is feasible, we start differentiating between "must-haves" and "nice-to-haves". Inevitably, it's the stuff from the top of the pyramid that is most likely to get cut, because it's objectively the least important.<br /><br />

            And this is the "right answer". I am not advocating that we make our sites less accessible or usable in pursuit of whimsical charm.
          `}
        >
          <Hierarchy
            height="90%"
            levels={[
              'Does it even load',
              'Does it work',
              'Is it accessible',
              'Is it clear',
              '☺️',
            ]}
          />
        </Slide>

        <Slide
          notes={`
            So is that it, then? With limited resources, should we just accept that there's no room for fun?

            Not so fast. There's another variable in this equation: effort.
          `}
        >
          <Heading size={1}>🤔</Heading>
        </Slide>

        <Slide
          notes={`
            Plenty of sites use CSS transitions, for example, because they're easy. React CSS Transition Group builds upon them to let us set properties based on component mount status, and so it's not uncommon to see route-based transitions, or 
          `}
        >
          <CssTransitionDemo />
        </Slide>

        <Slide>
          <Heading textColor="green" size={3} textFont="secondary">
            That top level is super important tho!
          </Heading>
          <br />
          <br />
          <Text>
            Whimsical touches make a product "stickier", can diffuse
            frustration, and can make the difference between a website and an
            application.
          </Text>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={2} textFont="secondary">
            How do we make our products more delightful?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
