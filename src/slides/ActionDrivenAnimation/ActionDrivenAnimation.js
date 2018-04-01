import React, { Fragment } from 'react';
import { Heading, List, ListItem, Text } from 'spectacle';

const StateDrivenAnimation = () => {
  return (
    <Fragment>
      <Heading size={2} textFont="secondary" textColor="green">
        Action-driven Animations
      </Heading>
      <br />
      <List>
        <ListItem textSize={50}>
          <strong>Things the user does</strong> are animated.
        </ListItem>
        <ListItem textSize={50}>
          We care about the <em>intent</em> behind changes in state.
        </ListItem>
        <ListItem textSize={50}>Not as natural in React.</ListItem>
      </List>
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default StateDrivenAnimation;
