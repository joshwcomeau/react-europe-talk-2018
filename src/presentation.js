import React, { Component } from 'react';
import {
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import styled, { injectGlobal } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import { Motion, spring } from 'react-motion';

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
import khanConfettiSrc from './assets/confetti.mp4';
import tobiasStatePromptSrc from './assets/tobias-state-prompt.gif';
import tobiasActionPromptSrc from './assets/tobias-action-prompt.gif';
import newSendAnimatedSrc from './assets/new-send-animated.mp4';
import newCloseAnimatedSrc from './assets/new-close-animated.mp4';
import tooMuchAnimationSrc from './assets/too-much-animation-rachel-nabors.jpeg';
import whimsicalOverallSrc from './assets/whimsical-overall.mp4';
import whimsicalReplySrc from './assets/whimsical-reply.mp4';
import whimsicalFoldSlowmoSrc from './assets/whimsical-fold-slowmo.mp4';
import childTransporterSrc from './assets/child-transporter.mp4';
import houdiniSrc from './assets/houdini-ripple.mp4';
import webRenderSrc from './assets/webrender.mp4';
import caniusePrefersReducedMotionSrc from './assets/caniuse-prefers-reduced-motion.png';
import magicSchoolBusSrc from './assets/magic-school-bus.gif';
import emailRetractSrc from './assets/email-retract.gif';
import emailSaveSrc from './assets/email-save.gif';
import emailSendSrc from './assets/email-send.gif';

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
import FoldConcept from './components/FoldConcept';
import Foldable from './components/Foldable';
import WibblyWobblyCircle from './components/WibblyWobblyCircle';
import Underlined from './components/Underlined';
import Spacer from './components/Spacer';

import Title from './slides/Title';
import SectionStart from './slides/SectionStart';
import WhoAmI from './slides/WhoAmI';
import WishTheInternet from './slides/WishTheInternet';
import ConfettiArchitecture from './slides/ConfettiArchitecture';
import LevelsOfAbstraction from './slides/LevelsOfAbstraction';
import StateDrivenAnimation from './slides/StateDrivenAnimation';
import ActionDrivenAnimation from './slides/ActionDrivenAnimation';
import Circles from './slides/Circles';

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

// HACK: Spectacle applies a `transform: scale(1)` to all slides.
// This means that any children with position: fixed don't actually position
// themselves relative to the viewport, they position themselves relative to
// the 1000x700px slide container.
// This class allows us to override that scale, since none of my slides use
// scale in transitions anyway.
injectGlobal`
  .slideWithoutScale {
    transform: none !important;
  }
`;

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
        transition={['fade']}
        transitionDuration={500}
        progress={null}
        theme={theme}
      >
        <Slide className="slideWithoutScale">
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
          transition={['none']}
          notes={`
            Anyone remember Ask Jeeves? I remember never getting any useful answers out of him, but I found the experience delightful nonetheless.<br /><br />

            Web developers had one tool, and one tool only, for animation...
          `}
        >
          <FullscreenImage src={askJeevesSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            The animated GIF.<br/><br />

            The cool thing about this golden era of the web is that nobody knew what they were doing.
          `}
        >
          <FullscreenImage src={cameronsWorldSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            This is actually McDonald's website, circa early 1997.
          `}
        >
          <FullscreenImage src={mcdonaldsSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
          Check it out, there's a little man popping out from behind the golden arches to give them a quick polish.<br /><br />

          Web technologies were essentially nonexistent at this time. Javascript was less than a year old, CSS wouldn't show up for another year. We built documents, and embedded animated GIFs for flavor.
          `}
        >
          <FullscreenImage src={mcdonaldsZoomSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
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

        <Slide bgColor="secondary" transition={['none']}>
          <Video videoId={261999178} />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
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

        <Slide bgColor="teal">
          <SectionStart subtitle="Example 1" title="Confetti" />
        </Slide>

        <Slide bgColor="secondary">
          <img src={confettiMockupSrc} style={{ width: '100%' }} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <video
            autoPlay
            loop
            src={khanConfettiSrc}
            style={{ width: '100%' }}
          />
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

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/Canvas.example')}
          ranges={[
            { loc: [0], title: '<Canvas />' },
            { loc: [3, 9] },
            {
              loc: [7, 8],
              note: 'A render prop, but for Canvas',
            },
            { loc: [36, 46] },
            { loc: [10, 17] },
            { loc: [18, 21] },
            {
              loc: [22, 35],
              note: 'Scaling for HiDPI (retina) displays',
            },
            { loc: [36, 46] },
          ]}
        />

        <Slide>
          <ComponentPlayground
            code={require('./code/CanvasDemo.example')}
            theme="external"
            scope={{ Canvas }}
          />
        </Slide>

        <Slide>
          <Heading>Canvas Animation</Heading>
          <ComponentPlayground
            code={require('./code/CanvasAnimation.example')}
            theme="external"
            scope={{ Canvas, Motion, spring }}
          />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/Confetti.example')}
          ranges={[
            {
              loc: [0],
              title: '<Confetti />',
              note: '✂️ Abridged Version ✂️',
            },
            { loc: [3, 4] },
            { loc: [5, 9] },
            { loc: [10, 21] },
            { loc: [22, 26] },
            { loc: [28, 31] },
            { loc: [32, 35] },
            // Render
            { loc: [124, 125] },
            { loc: [131, 134] },
            { loc: [135, 146] },
            { loc: [139, 140] },
            { loc: [140, 144] },
            // draw
            { loc: [108, 123] },
            { loc: [111, 112] },
            { loc: [113, 117] },
            { loc: [118, 119] },
            { loc: [120, 121] },

            // generateParticles
            { loc: [52, 53] },
            { loc: [53, 57] },
            { loc: [57, 61] },
            { loc: [62, 63] },
            { loc: [64, 65] },
            { loc: [67, 73] },
            {
              loc: [67, 73],
              note: 'How does our animation loop start?',
            },

            // cDU
            { loc: [36, 47] },

            // tick
            { loc: [75, 91] },
            { loc: [76, 79] },
            { loc: [80, 82] },
            { loc: [82, 83] },
            { loc: [84, 88] },
            { loc: [86, 87] },

            // calculateNextPositionForParticles
            { loc: [92, 93] },
            { loc: [93, 94] },
            { loc: [95, 97] },
            { loc: [97, 98] },
            { loc: [99, 104] },
            { loc: [105, 106] },

            // Render again
            { loc: [124, 125] },
          ]}
        />

        <Slide>TODO: SVG vs Canvas?</Slide>

        <Slide>
          TODO: Performance. Talk about how at this scale, you have 16ms per
          frame, and that's really only 10ms of JS-time. React re-rendering
          takes x ms, an cloning an object takes 0.5ms, which is actually
          significant at this scale.
          <br />
          Although do mention that even at this scale, `map` is fine instead of
          a `for` loop, inline functions are still fine, etc.
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            This may seem very niche, or not relevant to the work y'all do.
            I think you'd be surprised how handy it can be, though.
          `}
        >
          <Heading textColor="purple" textFont="secondary" size={3}>
            I work at <br />
            <span
              style={{
                fontWeight: 100,
                fontFamily: 'monospace',
                color: COLORS.pink[500],
              }}
            >
              [serious company]
            </span>,
            <br />
            we wouldn't add confetti to our app!
          </Heading>
        </Slide>

        <Slide
          notes={`
            Facebook, for example, has an easter egg that pops confetti. I
            think I've seen it on Medium as well, when they do their
            end-of-year summaries.

            But yeah, I take the point that not every app needs whimsical
            Canvas animations.
          `}
        >
          <FullscreenImage portrait src={facebookCongratsSrc} />
        </Slide>

        {/*



          PART II



        */}

        <Slide
          bgColor="teal"
          notes={`
            Let's look at something far more conventional: an email client.

            Whimsy isn't all bubblegum and rainbows, sometimes it's about
            helpful, meaningful interactions that make our users smile.
          `}
        >
          <SectionStart subtitle="Example 2" title="Email Client" />
        </Slide>

        <Slide bgColor="#000000">
          <video controls src={whimsicalOverallSrc} width={920} />
        </Slide>

        <Slide
          notes={`
            There's a lot going on in this demo, so let's break it down into
            a few pieces.

            First, I'd like to focus on the fact that these animations are
            action-driven, not state-driven.

            In React, we typically animate based on our application's state,
            like whether or not a modal is open. In this case, though, I'm
            animating in response to the user's action. Cancelling a modal
            is different from saving a draft, which is different from sending
            an email.
          `}
        >
          <Heading textFont="secondary" size={4}>
            Meaningful & action-driven:
          </Heading>
          <Spacer size={40} />
          TODO: GIF
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            I'm only scratching the surface of this subject, but I'd encourage
            y'all to check out this blog post if the distinction between state-
            driven and action-driven animations is interesting.
          `}
        >
          <Heading textFont="secondary" textColor="green" size={5}>
            “Meaningful Motion with<br />Action-Driven Animation”
          </Heading>
          <Spacer size={50} />
          <Text>
            <a
              style={{
                color: COLORS.blue[500],
              }}
              href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/"
            >
              http://tobiasahlin.com/blog
            </a>
          </Text>
          <br />
          <br />
        </Slide>

        <Slide
          notes={`
            Next up, there's the idea that nodes on our page can function as
            spawn points, as well as receivers, for our modals.

            In addition to being a whimsical touch, I feel like this is really
            useful. it's happened to me where I'll save a draft in some app,
            and then I have no idea where to find the draft I saved. Some apps
            rely on those convoluted tooltip walkthroughs for this, you know,
            those things everyone bails out of ASAP? Why not use animations to
            show the user how our app is laid out?
          `}
        >
          <Heading textFont="secondary" size={4}>
            Transporting between nodes
          </Heading>
          <Spacer size={40} />
          TODO: GIF
        </Slide>

        <Slide
          notes={`
            Finally, there's this cute folding animation. This is my favorite
            part of it, because it's a throwback to the days of snail mail, and
            who doesn't like receiving a letter?
          `}
        >
          <Heading textFont="secondary" size={4}>
            Folding animation
          </Heading>
          <Spacer size={40} />
          TODO: GIF
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            When I started showing this animation to people, often the first bit of feedback I got was that it would get old fast, and that it'd
            become this annoying waste of time that you just need to sit through.

            And that's a totally fair bit of feedback, but it's also easy to address.
          `}
        >
          <Heading
            size={4}
            textColor="primary"
            textFont="secondary"
            style={{
              marginTop: -100,
              marginBottom: 50,
            }}
          >
            I know what you're thinking...
          </Heading>
          <FullscreenImage src={tooMuchAnimationSrc} />
          <Caption>Source: Rachel Nabors, rachelnabors.com</Caption>
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            A joke isn't funny the 70th time you hear it, but that doesn't mean
            we should abolish jokes entirely!

            You can also just add a user setting to disable animations, which
            is not only helpful for straight-to-business curmudgeons, but also
            folks with vestibular disorders. More on this in a bit.
          `}
        >
          <Heading textFont="secondary" textColor="green" size={3}>
            Write self-disabling animations
          </Heading>

          <br />
          <br />

          <Text textColor="primary">
            Whimsy is supposed to be{' '}
            <em style={{ color: COLORS.yellow[500] }}>unexpected</em>.
          </Text>
        </Slide>

        <Slide bgColor="deepPurple" textColor="primary">
          <SectionStart subtitle="Element 1" title="Folding the DOM" />
        </Slide>

        <Slide>
          <FoldConcept />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="flow"
          code={require('./code/FoldableConcise.example')}
          ranges={[
            {
              loc: [0],
              title: '<Foldable />',
              note: '✂️ Abridged Version ✂️',
            },
            { loc: [0, 7] },
            { loc: [8, 11] },

            { loc: [96, 105] },

            { loc: [12, 13] },
            { loc: [24, 25] },
            { loc: [14, 27] },
            { loc: [15, 18] },
            { loc: [18, 22] },

            { loc: [29, 30] },
            { loc: [32, 38] },
            { loc: [40, 48] },
            { loc: [48, 62] },
            { loc: [48, 52] },
            { loc: [52, 53] },
            { loc: [53, 59] },
            { loc: [56, 57] },
            { loc: [62, 76] },
            { loc: [77, 92] },

            { loc: [96, 105] },

            { loc: [108, 222] },
          ]}
        />

        {/* <CodeSlide
          bgColor="secondary"
          lang="flow"
          code={require('./code/Foldable.example')}
          ranges={[
            {
              loc: [0],
              title: '<Foldable />',
            },
            // Props, defaultProps, instance vars
            { loc: [9, 16] },
            { loc: [17, 21] },
            { loc: [22, 24] },

            // `componentDidUpdate`
            { loc: [25, 41] },
            // `componentWillUnmount`
            { loc: [42, 50] },

            // `renderOriginal`
            { loc: [51, 67] },

            // `renderFoldedCopy`
            { loc: [68, 70] },
            { loc: [71, 77] },
            { loc: [78, 83] },
            { loc: [84, 93] },
            // `TopFold`
            { loc: [93, 110] },
            { loc: [93, 100] },
            { loc: [100, 101] },
            { loc: [101, 107] },
            { loc: [108, 109] },
            // `MiddleFold` and `BottomFold`
            { loc: [111, 124] },
            { loc: [125, 145] },

            // `render`
            { loc: [149, 158] },

            // CSS highlights
            { loc: [160, 172] }, // keyframes 1
            { loc: [219, 220] }, // transform-style
            { loc: [240, 249] }, // FoldContents
            { loc: [250, 261] }, // TopFoldBack
          ]}
        /> */}

        <Slide
          notes={`
            For imperative effects like this, it can be a bit tricky to figure
            out how to do
          `}
        >
          <Heading size={2} textColor="pink" textFont="secondary">
            React is Awesome
          </Heading>
          <br />
          <br />
          <Text>
            This effect is accomplished by CSS, but it's messy.<br />
            With React, we can abstract this into a <Foldable /> component with
            a beautiful API.
          </Text>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/FoldableDemo.example')}
          ranges={[
            {
              loc: [0],
              title: 'Consumer',
            },
            { loc: [0, 4] },
            { loc: [5, 8] },
            { loc: [9, 22] },
          ]}
        />

        <Slide bgColor="deepPurple" textColor="primary">
          <SectionStart subtitle="Element 2" title="Transporting Children" />
        </Slide>

        <Slide bgColor="#000000">
          <video autoPlay loop src={childTransporterSrc} width={920} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/NodeProvider.example')}
          ranges={[
            {
              loc: [0],
              title: '<NodeProvider />',
            },
            // createContext
            { loc: [2, 5] },

            { loc: [6, 7] },

            // State
            { loc: [7, 9] },
            { loc: [9, 17] },

            // render
            { loc: [19, 28] },
            // exports
            { loc: [30, 34] },
          ]}
        />

        <CodeSlide
          transition={['none']}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/NodeProviderConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: 'Usage',
            },
            // App
            { loc: [0, 9] },
            { loc: [3, 6] },

            // InboxHeading
            { loc: [10, 19] },
            { loc: [11, 13] },
            { loc: [13, 16] },

            // SomewhereElse
            { loc: [20, 29] },
          ]}
        />

        {/* <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/ChildTransporter.example')}
          ranges={[
            {
              loc: [0],
              title: '<ChildTransporter />',
              note: '✂️ Abridged Version ✂️',
            },
            { loc: [0, 11] },
            { loc: [2, 3] },
            { loc: [3, 5] },
            { loc: [5, 10] },

            { loc: [13, 14] },
            { loc: [14, 25] },

            { loc: [26, 33] },
            { loc: [34, 35] },
            { loc: [37, 40] },
            { loc: [42, 44] },
            { loc: [45, 51] },

            { loc: [53, 54] },
            { loc: [53, 63] },

            { loc: [64, 81] },

            { loc: [82, 83] },
            { loc: [83, 101] },
            { loc: [102, 105] },

            { loc: [106, 107] },
            { loc: [110, 127] },
            { loc: [128, 132] },
            { loc: [134, 145] },
            { loc: [145, 146] },
          ]}
        /> */}

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/ChildTransporterConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: 'ChildTransporter Usage',
            },
            { loc: [0, 1] },
            { loc: [1, 4] },

            { loc: [5, 6] },

            { loc: [7, 8] },
            { loc: [8, 14] },
            { loc: [14, 19] },
          ]}
        />

        <Slide>
          TODO: image showing the ChildTransporter terms overlaid on a
          screenshot of whimsical mail
        </Slide>

        {/*



        CONCLUSION



        */}

        <Slide bgColor="teal">
          <SectionStart title="Conclusion" />
        </Slide>

        <Slide
          notes={`
            I remember years ago, someone told me that the most interesting
            problems to work on were the ones that no one's solved yet.

            And I remember thinking "Almost everything's already been solved,
            and the stuff that hasn't is super hard and I'll never be good
            enough to solve them"

            There's so much really cool stuff we can build.
          `}
        >
          <Heading textFont="secondary" textColor="purple" size={4}>
            There's
          </Heading>
          <Heading textFont="secondary" textColor="pink" size={1}>
            SO MUCH
          </Heading>
          <Heading textFont="secondary" textColor="purple" size={4}>
            unexplored territory
          </Heading>
        </Slide>

        <Slide>
          <Circles />
        </Slide>

        <Slide>
          <Heading textFont="secondary" textColor="purple" size={4}>
            And the future is
          </Heading>
          <Heading textFont="secondary" textColor="pink" size={1}>
            SO EXCITING
          </Heading>
        </Slide>

        <Slide>
          <Heading
            textFont="secondary"
            textColor="purple"
            size={2}
            style={{ marginTop: -150 }}
          >
            CSS Paint
          </Heading>
          <br />
          <video autoPlay loop src={houdiniSrc} style={{ height: 400 }} />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            textFont="secondary"
            textColor="primary"
            size={2}
            style={{ marginTop: -150 }}
          >
            WebRender
          </Heading>
          <br />
          <video
            autoPlay
            loop
            src={webRenderSrc}
            style={{
              width: '75%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading textColor="pink" size={1} textFont="secondary">
            But!!
          </Heading>
          <br />
          <br />
          <Text textColor="primary">
            This stuff is{' '}
            <Underlined
              style={{
                color: COLORS.lime[500],
              }}
            >
              less important
            </Underlined>{' '}
            than{' '}
            <Underlined
              style={{
                color: COLORS.yellow[500],
              }}
            >
              Accessibility
            </Underlined>.
          </Text>
          <br />
          <br />
          <Text textColor="primary">
            Before we should try and make our sites delightful, we should strive
            for them to be usable.
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textColor="primary" size={4}>
            If nothing else, we should make sure that our whimsical touches
            aren't harmful for folks with vestibular disorders.
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="inconsolata" textColor="primary" size={3}>
            prefers-reduced-motion
          </Heading>

          <br />
          <br />

          <CodePane
            lang="css"
            source={`
@media (prefers-reduced-motion) {
  /* reduce animation */
}
`}
            theme="external"
            style={{ fontSize: 32 }}
          />
        </Slide>

        <Slide transition={[null]} bgColor="secondary">
          <Heading textFont="inconsolata" textColor="primary" size={3}>
            prefers-reduced-motion
          </Heading>

          <br />
          <br />

          <CodePane
            lang="js"
            source={`
const prefersReducedMotion = window
  .matchMedia('(prefers-reduced-motion)')
  .matches;

if (prefersReducedMotion) {
  /* reduce animation */
}
`}
            theme="external"
            style={{ fontSize: 32 }}
          />
        </Slide>

        <Slide bgColor="#f2e8d6">
          <FullscreenImage src={caniusePrefersReducedMotionSrc} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            Even if you don't need confetti, though, I'd encourage you to
            imagine what you could use that <Canvas /> component for.

            A common thing we developers like to tell designers is that
            something is "non-trivial". Right? I've used this. This is about
            expanding our toolkit, so that if we have an idea for something,
            or we get a design for something tricky, we have more tools in our
            toolbox to tackle it.
          `}
        >
          <Heading textColor="yellow" textFont="secondary">
            The Takeaway
          </Heading>
          <Spacer size={80} />

          <Heading textColor="pink" size={5}>
            <span style={{ color: 'white' }}>Whimsical experiences</span> lead
            to better user experiences.
          </Heading>

          <Spacer size={40} />

          <Heading textColor="pink" size={5}>
            By <span style={{ color: 'white' }}>expanding our toolbox</span>, we
            can build a wider variety of experiences .
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            textColor="pink"
            textFont="secondary"
            style={{ marginTop: -150 }}
          >
            That's all, folks!
          </Heading>
          <br />
          <br />
          <br />
          <Text textColor="primary">Slides and code available at</Text>
          <Heading textColor="blue">@joshwcomeau</Heading>
        </Slide>
      </Deck>
    );
  }
}
