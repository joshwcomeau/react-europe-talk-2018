import React, { Component } from 'react';
import {
  BlockQuote,
  Cite,
  ComponentPlayground,
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
import CodeSlide from 'spectacle-code-slide';

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
import tobiasStatePromptSrc from './assets/tobias-state-prompt.gif';
import tobiasActionPromptSrc from './assets/tobias-action-prompt.gif';
import newSendAnimatedSrc from './assets/new-send-animated.mp4';
import newCloseAnimatedSrc from './assets/new-close-animated.mp4';

import FullscreenImage from './components/FullscreenImage';
import Video from './components/Video';
import Hierarchy from './components/Hierarchy';
import CssTransitionDemo from './components/CssTransitionDemo';
import ConfettiManager from './components/ConfettiManager';
import Canvas from './components/Canvas';
import Confetti from './components/Confetti';
import Particles from './components/Confetti/Particles';
import { createZigZag } from './components/Confetti/confetti-shapes.js';
import Caption from './components/Caption';

import Title from './slides/Title';
import SectionStart from './slides/SectionStart';
import WhoAmI from './slides/WhoAmI';
import WishTheInternet from './slides/WishTheInternet';
import ConfettiArchitecture from './slides/ConfettiArchitecture';
import LevelsOfAbstraction from './slides/LevelsOfAbstraction';
import StateDrivenAnimation from './slides/StateDrivenAnimation';
import ActionDrivenAnimation from './slides/ActionDrivenAnimation';

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
  tobiasStatePromptSrc,
  tobiasActionPromptSrc,
  newSendAnimatedSrc,
  newCloseAnimatedSrc,
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
      <Deck
        transition={['slide']}
        transitionDuration={500}
        progress={null}
        theme={theme}
      >
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
            <span
              style={{
                color: COLORS.pink[500],
              }}
            >
              broad definition
            </span>,
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
            <span
              style={{
                color: COLORS.lime[500],
              }}
            >
              interaction
            </span>{' '}
            &{' '}
            <span
              style={{
                color: COLORS.lime[500],
              }}
            >
              animation
            </span>.
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
          <SectionStart num={1} title="Confetti" />
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

        <Slide>
          <ConfettiArchitecture />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="flow"
          code={require('./code/Canvas.example')}
          ranges={[
            { loc: [0], title: '<Canvas />' },
            { loc: [3, 9] },
            {
              loc: [6, 8],
              note: 'A render prop, but for Canvas',
            },
            { loc: [10, 18] },
            { loc: [19, 22] },
            { loc: [23, 36] },
            { loc: [37, 54] },
          ]}
        />

        <Slide>
          <ComponentPlayground
            code={require('./code/CanvasDemo.example')}
            theme="external"
            scope={{ Canvas }}
          />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="flow"
          code={require('./code/Confetti.example')}
          ranges={[
            {
              loc: [0],
              title: '<Confetti />',
            },
            { loc: [2, 7] },
            { loc: [7, 8] },
            { loc: [9, 13] },
            { loc: [14, 20] },
            { loc: [21, 23] },
            { loc: [29, 30] },
            { loc: [31, 32] },
            { loc: [32, 36] },
            { loc: [37, 38] },
            { loc: [39, 40] },
            { loc: [41, 45] },
            { loc: [46, 59] },
            { loc: [60, 65] },
            { loc: [67, 83] },
          ]}
        />

        <Slide
          notes={`
            - Canvas renders a single frame. This is useful to separate the animation and physics calculations from the canvas rendering stuff.
          `}
        >
          <ComponentPlayground
            code={require('./code/ConfettiDemo.example')}
            theme="external"
            scope={{ Confetti, createZigZag }}
          />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="flow"
          code={require('./code/Particles.example')}
          ranges={[
            {
              loc: [0],
              title: '<Particles />',
            },
            { loc: [18, 19] },
            { loc: [20, 24] },
            { loc: [25, 29] },
            { loc: [30, 33] },
            { loc: [33, 34] },
            { loc: [34, 35] },
            { loc: [35, 36] },
            { loc: [36, 38] },
            { loc: [38, 40] },
            { loc: [40, 42] },
            { loc: [42, 43] },
            { loc: [43, 46] },

            { loc: [48, 52] },
            { loc: [52, 64] },
            { loc: [65, 69] },

            { loc: [70, 81] },

            { loc: [82, 83] },
            { loc: [83, 86] },
            { loc: [86, 90] },
            { loc: [91, 106] },
            { loc: [107, 124] },
            { loc: [126, 135] },

            { loc: [70, 81] },

            { loc: [137, 147] },

            { loc: [148, 149] },
            { loc: [151, 154] },
            { loc: [157, 209] }, // TODO: Refine
            { loc: [210, 224] },
          ]}
        />

        <Slide
          notes={`
          `}
        >
          <ComponentPlayground
            code={require('./code/ParticlesDemo.example')}
            theme="external"
            scope={{ Particles, Confetti }}
          />
        </Slide>

        <Slide>TODO: Confetti shapes maybe?</Slide>

        <Slide
          notes={`
            The composition model, and how it extends far beyond animation.

            Mention <ExerciseConfetti> as the next level up the ladder
          `}
        >
          <LevelsOfAbstraction />
        </Slide>

        <Slide>TODO: Graph here maybe?</Slide>

        <Slide>
          TODO: Something about not overengineering, using Dan A's tweet or the
          blue circle factory GIF?
        </Slide>

        <Slide>
          TODO: Performance. Talk about how at this scale, you have 16ms per
          frame, and that's really only 10ms of JS-time. React re-rendering
          takes x ms, an cloning an object takes 0.5ms, which is actually
          significant at this scale.
          <br />
          Although do mention that even at this scale, `map` is fine instead of
          a `for` loop, inline functions are still fine, etc.
        </Slide>

        <Slide bgColor="teal">
          <SectionStart num={2} title="Email Client" />
        </Slide>

        <Slide bgColor="#292e3a">
          <FullscreenImage src={tobiasStatePromptSrc} />
          <Caption>
            Source:{' '}
            <a href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/">
              tobiasahlin.com
            </a>
          </Caption>
        </Slide>

        <Slide>
          <StateDrivenAnimation />
        </Slide>

        <Slide bgColor="#292e3a">
          <FullscreenImage src={tobiasActionPromptSrc} />
          <Caption>
            Source:{' '}
            <a href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/">
              tobiasahlin.com
            </a>
          </Caption>
        </Slide>

        <Slide>
          <ActionDrivenAnimation />
        </Slide>

        <Slide bgColor="#000000">
          <video controls src={newSendAnimatedSrc} width={920} />
          <Caption>
            Source:{' '}
            <a href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/">
              tobiasahlin.com
            </a>
          </Caption>
        </Slide>

        <Slide bgColor="#000000">
          <video controls src={newCloseAnimatedSrc} width={920} />
          <Caption>
            Source:{' '}
            <a href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/">
              tobiasahlin.com
            </a>
          </Caption>
        </Slide>

        <Slide>
          <Heading textFont="secondary" size={4}>
            Meaningful Motion with<br />Action-Driven Animation
          </Heading>
          <br />
          <br />
          <Text>
            <a
              style={{ color: COLORS.blue[500] }}
              href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/"
            >
              http://tobiasahlin.com/blog
            </a>
          </Text>
          <br />
          <br />
        </Slide>

        <Slide textSize={120}>
          🤔
          <br />
          <br />
          ✨🔥🎉
        </Slide>
      </Deck>
    );
  }
}
