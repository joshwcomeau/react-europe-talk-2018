import React, { Fragment } from 'react';
import { Heading, List, ListItem, Text } from 'spectacle';

const StateDrivenAnimation = () => {
  return (
    <Fragment>
      <Heading size={2} textFont="secondary" textColor="red">
        State-driven Animations
      </Heading>
      <br />
      <List>
        <ListItem textSize={50}>
          <strong>Changes in state</strong> are animated.
        </ListItem>
        <ListItem textSize={50}>This is natural in React:</ListItem>
      </List>
      <Text textSize={65}>
        <span style={{ fontFamily: 'monospace' }}>UI = F(S)</span>
      </Text>
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default StateDrivenAnimation;
