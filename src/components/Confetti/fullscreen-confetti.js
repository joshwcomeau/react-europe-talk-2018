// @flow
/*
    FullscreenConfetti
    Convenience wrapper around Confetti, which passes in a width/height
    equal to the window size (or screen size, for mobile devices), and updates
    when that width/height changes.
*/

import React, {Component} from "react";

import KA from "../../shared-package/ka.js";
import Confetti from "./confetti.jsx";

import type {ConfettiProps} from "./confetti.jsx";

type State = {
    windowWidth?: number,
    windowHeight?: number,
};

const getWindowDimensions = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // HACK (josh): For some reason, the canvas gets stretched really
    // strangely in mobile safari when using window.innerWidth/innerHeight.
    // Instead, for mobile devices, just use the device screen size.
    // NOTE: This is slightly inaccurate, since the screen size includes
    // the browser UI. This has no practical effect, though; all it means
    // is that the confetti winds up being a bit taller, extending
    // off-screen by ~40px.
    if (KA.isPhone) {
        windowWidth = window.screen.width;
        windowHeight = window.screen.height;
    }

    return {windowWidth, windowHeight};
};

class FullscreenConfetti extends Component {
    canvas: Confetti;

    props: ConfettiProps;
    state: State = getWindowDimensions();

    componentDidMount() {
        this.setDimensions();

        window.addEventListener("resize", this.setDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setDimensions);
    }

    setDimensions = () => {
        this.setState(getWindowDimensions());
    };

    // Delegate all calls to THIS ref to the actual Canvas ref.
    startConfetti = (...args: any) => this.canvas.startConfetti(...args);

    render() {
        return (
            <Confetti
                {...this.props}
                ref={(node: Confetti) => (this.canvas = node)}
                width={this.state.windowWidth}
                height={this.state.windowHeight}
            />
        );
    }
}

export default FullscreenConfetti;
