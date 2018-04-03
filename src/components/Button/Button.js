// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

type Props = {
  primary: boolean,
  secondary: boolean,
};
const Button = ({ primary, secondary, ...delegated }: Props) => {
  if (secondary) {
    return <SecondaryButton {...delegated} />;
  }

  return <PrimaryButton {...delegated} />;
};

const ButtonBase = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
`;

const PrimaryButton = styled(ButtonBase)`
  padding: 0 20px;
  background: linear-gradient(
    -10deg,
    ${COLORS.purple[500]},
    ${COLORS.pink[500]} 85%
  );
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);

  &:active {
    background: linear-gradient(
      -10deg,
      ${COLORS.purple[700]},
      ${COLORS.pink[500]}
    );
  }
`;

const SecondaryButton = styled(ButtonBase)`
  padding: 0 10px;
  font-size: 25px;
  color: ${COLORS.gray[800]};
`;

export default Button;
