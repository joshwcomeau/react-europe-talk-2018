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

class WishTheInternet extends Component {
  render() {
    return (
      <div>
        <Heading textColor="red" size={2} textFont="secondary">
          I wish the internet was more fun.
        </Heading>
      </div>
    );
  }
}

export default WishTheInternet;
