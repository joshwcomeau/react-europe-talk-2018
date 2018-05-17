import React, { Component } from 'react';
import {
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
} from 'spectacle';
import { injectGlobal } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import { Motion, spring } from 'react-motion';

import { COLORS } from './constants';

import askJeevesSrc from './assets/ask-jeeves.gif';
import mcdonaldsSrc from './assets/mcdonalds-full.gif';
import mcdonaldsZoomSrc from './assets/mcdonalds-zoom.gif';
import mcdonaldsNowSrc from './assets/mcdonalds-now.png';
import jesseSkiingSrc from './assets/jesse-skiing.jpg';
import whimsyDefinitionSrc from './assets/whimsy-definition.png';
import facebookCongratsSrc from './assets/facebook-congrats.gif';
import confettiMockupSrc from './assets/confetti-mockup.png';
import khanConfettiSrc from './assets/confetti.mp4';
import tooMuchAnimationSrc from './assets/too-much-animation-rachel-nabors.jpeg';
import whimsicalFold from './assets/whimsical-fold.mp4';
import transportStorybookSrc from './assets/transport-storybook.mp4';
import transportAreasSrc from './assets/transport-areas.jpg';
import webRenderSrc from './assets/webrender.mp4';
import caniusePrefersReducedMotionSrc from './assets/caniuse-prefers-reduced-motion.png';
import unsplashErrorKetchupSrc from './assets/unsplash-error-ketchup.mp4';
import unsplashErrorCatSrc from './assets/unsplash-error-cat.mp4';
import joshComputerSrc from './assets/josh-cpu.jpg';

import FullscreenImage from './components/FullscreenImage';
import ConfettiManager from './components/ConfettiManager';
import Canvas from './components/Canvas';
import Confetti from './components/Confetti';
import Caption from './components/Caption';
import FoldConcept from './components/FoldConcept';
import Foldable from './components/Foldable';
import Underlined from './components/Underlined';
import Spacer from './components/Spacer';

import Title from './slides/Title';
import SectionStart from './slides/SectionStart';
import WishTheInternet from './slides/WishTheInternet';
import Circles from './slides/Circles';

require('normalize.css');
require('highlight.js/styles/arta.css');

preloader({
  askJeevesSrc,
  mcdonaldsSrc,
  mcdonaldsZoomSrc,
  mcdonaldsNowSrc,
  jesseSkiingSrc,
  whimsyDefinitionSrc,
  facebookCongratsSrc,
  confettiMockupSrc,
  khanConfettiSrc,
  tooMuchAnimationSrc,
  whimsicalFold,
  transportStorybookSrc,
  transportAreasSrc,
  webRenderSrc,
  caniusePrefersReducedMotionSrc,
  unsplashErrorKetchupSrc,
  unsplashErrorCatSrc,
  joshComputerSrc,
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
    indigo: COLORS.indigo[700],
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
        <Slide>
          <WishTheInternet />
        </Slide>

        <Slide bgColor="#000000">
          <FullscreenImage src={joshComputerSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={jesseSkiingSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={askJeevesSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={mcdonaldsSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={mcdonaldsZoomSrc} />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <FullscreenImage src={mcdonaldsNowSrc} />
        </Slide>

        <Slide className="slideWithoutScale">
          <Title />
        </Slide>

        <Slide>
          <FullscreenImage src={whimsyDefinitionSrc} />
        </Slide>

        <Slide>
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
          <video
            autoPlay
            loop
            src={unsplashErrorKetchupSrc}
            style={{
              width: '75%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
          <video
            autoPlay
            loop
            src={unsplashErrorCatSrc}
            style={{
              width: '75%',
              margin: 'auto',
            }}
          />
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
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

        <Slide>
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
            { loc: [0, 1] },
            { loc: [2, 4] },
            { loc: [5, 15] },
            { loc: [16, 20] },
            { loc: [22, 25] },

            // Render
            { loc: [92, 93] },
            { loc: [93, 98] },
            { loc: [99, 110] },
            { loc: [103, 104] },
            { loc: [104, 108] },
            // draw
            { loc: [76, 77] },
            { loc: [79, 80] },
            { loc: [81, 82] },
            { loc: [82, 85] },
            { loc: [86, 87] },
            { loc: [88, 89] },

            // generateParticles
            { loc: [38, 39] },
            { loc: [39, 41] },
            { loc: [41, 47] },
            { loc: [48, 54] },
            {
              loc: [48, 54],
              note: 'How does our animation loop start?',
            },

            // cDU
            { loc: [26, 37] },

            // tick
            { loc: [56, 57] },
            { loc: [57, 58] },
            { loc: [58, 59] },
            { loc: [60, 64] },
            { loc: [62, 63] },

            // calculateNextPositionForParticles
            { loc: [67, 68] },
            { loc: [68, 74] },

            // Render
            { loc: [92, 111] },
          ]}
        />

        <Slide bgColor="secondary" transition={[null]}>
          <Heading textColor="red">Performance</Heading>
          <List textColor="primary">
            <ListItem>Use Canvas</ListItem>
            <ListItem>Sneak around React</ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textColor="pink" textFont="secondary" size={3}>
            “But I'm not building an educational app...”
          </Heading>
        </Slide>

        <Slide>
          <FullscreenImage portrait src={facebookCongratsSrc} />
        </Slide>

        {/*



          PART II



        */}

        <Slide bgColor="teal">
          <SectionStart subtitle="Example 2" title="Email Client" />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          [Go do a demo Josh!]
        </Slide>

        <Slide bgColor="secondary" transition={['none']}>
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

        <Slide>
          <Heading textFont="secondary" size={4}>
            Slow-mo fold
          </Heading>
          <Spacer size={40} />
          <video autoPlay loop src={whimsicalFold} width={920} />
        </Slide>

        <Slide
          bgColor="secondary"
          notes={`
            When I started showing this animation to people, often the first bit of feedback I got was that it would get old fast, and that it'd
            become this annoying waste of time that you just need to sit through.

            And that's a totally fair bit of feedback, but it's also easy to address.
          `}
        >
          <FullscreenImage src={tooMuchAnimationSrc} />
          <Caption>Source: Rachel Nabors, rachelnabors.com</Caption>
        </Slide>

        <Slide
          bgColor="secondary"
          transition={['none']}
          notes={`
            A joke isn't funny the 70th time you hear it, but that doesn't mean
            we should abolish jokes entirely!

            You can also just add a user setting to disable animations, which
            is not only helpful for no-nonsense, right-down-to-business
            curmudgeons, but also folks with vestibular disorders.
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
          code={require('./code/Foldable.example')}
          ranges={[
            {
              loc: [0],
              title: '<Foldable />',
              note: '✂️ Abridged Version ✂️',
            },
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [7, 10] },

            { loc: [94, 103] },
            { loc: [97, 98] },
            { loc: [98, 100] },

            { loc: [11, 12] },
            { loc: [23, 24] },
            { loc: [12, 26] },
            { loc: [14, 17] },
            { loc: [17, 22] },

            { loc: [28, 29] },
            { loc: [31, 37] },
            { loc: [38, 46] },
            { loc: [47, 60] },
            { loc: [54, 57] },
            { loc: [61, 74] },
            { loc: [75, 90] },

            { loc: [94, 103] },

            { loc: [105, 222] },
            { loc: [160, 222] },
            { loc: [200, 222] },
          ]}
        />

        <Slide>
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
            { loc: [9, 20] },
            { loc: [13, 16] },
            { loc: [16, 19] },
            { loc: [12, 20] },
          ]}
        />

        <Slide bgColor="deepPurple" textColor="primary">
          <SectionStart subtitle="Element 2" title="Node Transporter" />
        </Slide>

        <Slide bgColor="#000000">
          <video autoPlay loop src={transportStorybookSrc} width={920} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
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
              title: 'NodeProvider Usage',
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

        <Slide bgColor="secondary">
          <Heading textColor="primary">{'<Transport />'}</Heading>
          <br />
          <br />
          <FullscreenImage src={transportAreasSrc} />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          transition={['none']}
          code={require('./code/TransportConsumption.example')}
          ranges={[
            {
              loc: [0],
              title: '<Transport /> Usage',
            },
            { loc: [0, 1] },
            { loc: [1, 8] },

            { loc: [9, 10] },
            { loc: [12, 16] },

            { loc: [17, 23] },
            { loc: [23, 28] },
            { loc: [28, 35] },
            { loc: [17, 38] },
          ]}
        />

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

        <Slide
          bgColor="secondary"
          notes={`
            This demo is of 600 DOM nodes, each being animated using top/left
            and width/height. This works in Firefox's new rendering engine
            because it can hardware-accelerate all CSS properties (!!!)
          `}
        >
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

        <Slide>
          <Heading size={4} textColor="green">
            At Khan Academy, we have a "disable animations" property on our user
            model. We check that as well as `prefers-reduced-motion`.
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="green" textFont="secondary">
            The Takeaway
          </Heading>
          <Spacer size={40} />

          <Heading textColor="indigo" size={5}>
            Animations and interactions are a key part of the user experience.
          </Heading>
          <Spacer size={20} />
          <Heading textColor="deepPurple" size={5}>
            There are really interesting unsolved problems here.
          </Heading>
          <Spacer size={20} />
          <Heading textColor="pink" size={5}>
            This area is poised to blow up, as new web technologies emerge.
          </Heading>
          <Spacer size={20} />
          <Heading textColor="red" size={5}>
            Come be a part of it, and expand your toolkit!
          </Heading>
        </Slide>

        <Slide>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Heading
              textColor="pink"
              textFont="secondary"
              style={{ marginTop: -150 }}
            >
              Thanks!
            </Heading>
            <br />
            <br />
            <br />
            <Text textColor="secondary">Slides and code available at</Text>
            <Heading textColor="blue">@joshwcomeau</Heading>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <MakeItFullscreen>
              <Confetti
                makeItRainOn="mount"
                width={window.innerWidth}
                height={window.innerHeight}
                emitDuration={6000}
                numParticles={200}
                minScale={1}
                maxScale={2}
              />
            </MakeItFullscreen>
          </div>
        </Slide>
      </Deck>
    );
  }
}

/**
 * Spectacle puts everything in its own transformed layer, and so it's actually
 * quite difficult to make something truly fullscreen.
 * This is a hacky af workaround, I'm doing this hastily since the talk is
 * looming.
 */
class MakeItFullscreen extends Component {
  state = {
    offsetLeft: 0,
    offsetTop: 0,
  };

  componentDidMount() {
    const bb = this.node.getBoundingClientRect();

    this.setState({
      offsetLeft: -bb.left,
      offsetTop: -bb.top,
    });
  }

  render() {
    const { offsetLeft, offsetTop } = this.state;
    return (
      <div
        ref={node => (this.node = node)}
        style={{ position: 'absolute', top: offsetTop, left: offsetLeft }}
      >
        {this.props.children}
      </div>
    );
  }
}
