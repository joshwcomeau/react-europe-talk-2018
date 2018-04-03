import React, { Fragment } from 'react';
import { Heading } from 'spectacle';

const SectionStart = ({ subtitle, title }) => (
  <Fragment>
    <Heading
      size={6}
      textColor="primary"
      style={{
        opacity: 0.7,
        fontWeight: 500,
      }}
    >
      {subtitle}
    </Heading>
    <Heading size={1} textColor="primary" textFont="secondary">
      {title}
    </Heading>
    <br />
    <br />
    <br />
  </Fragment>
);

export default SectionStart;
