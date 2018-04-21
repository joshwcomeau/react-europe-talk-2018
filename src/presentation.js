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
import styled, {
  injectGlobal,
} from 'styled-components';
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
import houdiniSrc from './assets/houdini.mp4';
import webRenderSrc from './assets/webrender.mp4';
import caniusePrefersReducedMotionSrc from './assets/caniuse-prefers-reduced-motion.png';
import magicSchoolBusSrc from './assets/magic-school-bus.gif';

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
          <FullscreenImage
            src={jesseSkiingSrc}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            Anyone remember Ask Jeeves? I remember never getting any useful answers out of him, but I found the experience delightful nonetheless.<br /><br />

            Web developers had one tool, and one tool only, for animation...
          `}
        >
          <FullscreenImage
            src={askJeevesSrc}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            The animated GIF.<br/><br />

            The cool thing about this golden era of the web is that nobody knew what they were doing.
          `}
        >
          <FullscreenImage
            src={cameronsWorldSrc}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            This is actually McDonald's website, circa early 1997.
          `}
        >
          <FullscreenImage
            src={mcdonaldsSrc}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
          Check it out, there's a little man popping out from behind the golden arches to give them a quick polish.<br /><br />

          Web technologies were essentially nonexistent at this time. Javascript was less than a year old, CSS wouldn't show up for another year. We built documents, and embedded animated GIFs for flavor.
          `}
        >
          <FullscreenImage
            src={mcdonaldsZoomSrc}
          />
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
          <FullscreenImage
            src={mcdonaldsNowSrc}
          />
        </Slide>

        <Slide
          notes={`
            When I say "whimsy", here's what I mean.<br /><br />

            "An unexpected flourish that sparks joy". It's not stuff that is critical to the usability of your product, but it's something that makes your users smile, something that makes your product a little more enjoyable to use.<br /><br />
          `}
        >
          <FullscreenImage
            src={whimsyDefinitionSrc}
          />
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
          <Heading
            size={2}
            textFont="secondary"
            textColor="purple"
          >
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

        <Slide
          bgColor="secondary"
          transition={['none']}
        >
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
          <Heading
            size={3}
            textFont="secondary"
            textColor="pink"
          >
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

        {/* {<Slide
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
        </Slide>} */}

        <Slide bgColor="teal">
          <SectionStart
            subtitle="Example 1"
            title="Confetti"
          />
        </Slide>

        <Slide bgColor="secondary">
          <img
            src={confettiMockupSrc}
            style={{ width: '100%' }}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
        >
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
              note:
                'A render prop, but for Canvas',
            },
            { loc: [36, 46] },
            { loc: [10, 17] },
            { loc: [18, 21] },
            {
              loc: [22, 35],
              note:
                'Scaling for HiDPI (retina) displays',
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
              note:
                'How does our animation loop start?',
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
          TODO: Something about not
          overengineering, using Dan A's tweet
          or the blue circle factory GIF?
        </Slide>

        <Slide>
          TODO: Performance. Talk about how at
          this scale, you have 16ms per frame,
          and that's really only 10ms of
          JS-time. React re-rendering takes x
          ms, an cloning an object takes
          0.5ms, which is actually significant
          at this scale.
          <br />
          Although do mention that even at
          this scale, `map` is fine instead of
          a `for` loop, inline functions are
          still fine, etc.
        </Slide>

        <Slide
          bgColor="teal"
          notes={`
            Confetti is a fun example, but it may seem like a novelty usecase.
            While I do believe it's more widely applicable than you might think
            - facebook uses it, after all - I admit that confetti is not an
            everyday usecase.
          `}
        >
          <SectionStart
            subtitle="Example 2"
            title="Email Client"
          />
        </Slide>

        <Slide bgColor="#292e3a">
          <FullscreenImage
            src={tobiasStatePromptSrc}
          />
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
          <FullscreenImage
            src={tobiasActionPromptSrc}
          />
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
          <video
            controls
            src={newSendAnimatedSrc}
            width={920}
          />
          <Caption>
            Source:{' '}
            <a href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/">
              tobiasahlin.com
            </a>
          </Caption>
        </Slide>

        <Slide bgColor="#000000">
          <video
            controls
            src={newCloseAnimatedSrc}
            width={920}
          />
          <Caption>
            Source:{' '}
            <a href="http://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/">
              tobiasahlin.com
            </a>
          </Caption>
        </Slide>

        <Slide>
          <Heading
            textFont="secondary"
            size={4}
          >
            Meaningful Motion with<br />Action-Driven
            Animation
          </Heading>
          <br />
          <br />
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

        <Slide textSize={120}>
          🤔
          <br />
          <br />
          ✨🔥🎉
        </Slide>

        <Slide bgColor="#000000">
          <video
            controls
            src={whimsicalOverallSrc}
            width={920}
          />
        </Slide>

        <Slide>
          <Heading
            textFont="secondary"
            size={2}
            textColor="green"
          >
            Action-driven
          </Heading>

          <br />
          <br />
          <Text>
            Each user action (opening,
            clearing, sending) has its own
            meaningful animation.
          </Text>
        </Slide>

        <Slide
          notes={`
            Pause to talk about how the thing opens FROM the button, so you can always tell the difference between composing and replying.

            How many times has it happened where you save a draft email, or a facebook post or whatever, and then you have no idea where to find that saved content? This pattern prevents that by literally bringing your eye to the tab that holds your drafts.
          `}
        >
          <Heading
            textFont="secondary"
            size={2}
            textColor="teal"
          >
            Informative
          </Heading>

          <br />
          <br />
          <video
            controls
            src={whimsicalReplySrc}
            width="90%"
            style={{ margin: 'auto' }}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            textFont="secondary"
            textColor="lime"
          >
            Whimsical
          </Heading>
          <br />
          <br />
          <Text>
            Skeuomorphic animation can be
            delightful.
          </Text>
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
          <FullscreenImage
            src={tooMuchAnimationSrc}
          />
          <Caption>
            Source: Rachel Nabors,
            rachelnabors.com
          </Caption>
        </Slide>

        <Slide
          notes={`
            A joke isn't funny the 70th time you hear it, but that doesn't mean
            we should abolish jokes entirely!
          `}
        >
          <Heading
            textFont="secondary"
            textColor="green"
            size={2}
          >
            Write self-disabling animations
          </Heading>

          <br />
          <br />

          <Text>
            Whimsy is supposed to be
            unexpected.
          </Text>
        </Slide>

        <Slide
          notes={`
            Another thing we can do is to ensure that users who don't want to see animations don't need to see them!

            We'll cover this more later on, but for now, let's look at how I built this stuff.
          `}
        >
          <Heading
            textFont="secondary"
            textColor="teal"
            size={2}
          >
            Let users opt-out
          </Heading>

          <br />
          <br />
          <Text>
            More on this in a bit...
          </Text>
        </Slide>

        <Slide
          bgColor="deepPurple"
          textColor="primary"
        >
          <SectionStart
            subtitle="Element 1"
            title="Folding the DOM"
          />
        </Slide>

        <Slide>
          <FoldConcept />
        </Slide>

        <Slide>
          <Heading
            size={1}
            textColor="pink"
            textFont="secondary"
          >
            This is just CSS!
          </Heading>
          <Heading
            size={4}
            textColor="deepPurple"
            textFont="secondary"
          >
            (But the code is kinda gross.)
          </Heading>
          <br />
          <br />
          <Text>
            The beauty of React is we can bake
            this logic into a reusable
            component, and{' '}
            <strong>
              make anything foldable
            </strong>!
          </Text>
        </Slide>

        <CodeSlide
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
        />

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

        <Slide>
          <Heading
            size={1}
            textColor="pink"
            textFont="secondary"
          >
            Write Once,<br />Fold Anywhere!
          </Heading>
          <br />
          <br />
          <Text>
            It can be tricky to figure out how
            to do imperative DOM stuff with
            React, but it's worth the trouble.
          </Text>
        </Slide>

        <Slide
          bgColor="deepPurple"
          textColor="primary"
        >
          <SectionStart
            subtitle="Element 2"
            title="Transporting Children"
          />
        </Slide>

        <Slide bgColor="#000000">
          <video
            autoPlay
            loop
            src={childTransporterSrc}
            width={920}
          />
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
            { loc: [7, 10] },
            { loc: [10, 11] },
            { loc: [11, 14] },
            { loc: [15, 18] },
            { loc: [19, 29] },
            { loc: [26, 27] },
            // render
            { loc: [32, 41] },
            // exports
            { loc: [43, 47] },
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={require('./code/NodeProviderConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: 'Consumption',
            },
            // App
            { loc: [0, 9] },
            { loc: [3, 6] },

            // InboxHeading
            { loc: [10, 21] },
            { loc: [11, 13] },
            { loc: [13, 16] },

            // SomewhereElse
            { loc: [20, 29] },
          ]}
        />

        <Slide>
          TODO: ChildTraveller code
        </Slide>

        <Slide>Conclusion</Slide>

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
          <Heading
            textFont="secondary"
            textColor="purple"
            size={4}
          >
            There's
          </Heading>
          <Heading
            textFont="secondary"
            textColor="pink"
            size={1}
          >
            SO MUCH
          </Heading>
          <Heading
            textFont="secondary"
            textColor="purple"
            size={4}
          >
            unexplored territory
          </Heading>
        </Slide>

        <Slide>
          <WibblyWobblyCircle
            color={COLORS.pink[500]}
          />
          <WibblyWobblyCircle
            color={COLORS.purple[500]}
          />
        </Slide>

        <Slide>
          <Heading
            textFont="secondary"
            textColor="purple"
            size={4}
          >
            And the future is
          </Heading>
          <Heading
            textFont="secondary"
            textColor="pink"
            size={1}
          >
            SO EXCITING
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            textFont="secondary"
            textColor="primary"
            size={2}
            style={{ marginTop: -150 }}
          >
            CSS Paint
          </Heading>
          <br />
          <video
            autoPlay
            loop
            src={houdiniSrc}
            style={{ height: 400 }}
          />
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
          <Heading
            textColor="pink"
            size={1}
            textFont="secondary"
          >
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
            Before we should try and make our
            sites delightful, we should strive
            for them to be usable.
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            textColor="primary"
            size={4}
          >
            If nothing else, we should make
            sure that our whimsical touches
            aren't harmful for folks with
            vestibular disorders.
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            textFont="inconsolata"
            textColor="primary"
            size={3}
          >
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

        <Slide
          transition={[null]}
          bgColor="secondary"
        >
          <Heading
            textFont="inconsolata"
            textColor="primary"
            size={3}
          >
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
          <FullscreenImage
            src={
              caniusePrefersReducedMotionSrc
            }
          />
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
          <Text textColor="primary">
            Slides and code available at
          </Text>
          <Heading textColor="blue">
            @joshwcomeau
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
