import React, { Fragment } from 'react';
import { Heading, Text } from 'spectacle';
import styled from 'styled-components';

const LevelsOfAbstraction = () => {
  return (
    <Fragment>
      <Heading
        textFont="secondary"
        textColor="purple"
        size={2}
        style={{ marginTop: -100 }}
      >
        Levels of Abstraction
      </Heading>
      <br />
      <br />
      <TextWrapper>
        <Text>
          In terms of the domain, components{' '}
          <em>
            start <strong>generic</strong> and get <strong>specific</strong>
          </em>.
        </Text>
        <br />
        <Text>
          This is inversely correlated with <strong>platform tie-in</strong>.
        </Text>
      </TextWrapper>
    </Fragment>
  );
};

const TextWrapper = styled.div`
  max-width: 675px;
  margin: auto;
  text-align: left;
`;

export default LevelsOfAbstraction;
