import styled, { css } from 'styled-components';

import { SpacerProps } from '.';

export const Wrapper = styled.div<SpacerProps>`
  ${({ x, y }) => css`
    width: ${x}px;
    height: ${y}px;
  `}

  min-width: 1px;
  min-height: 1px;
`;
