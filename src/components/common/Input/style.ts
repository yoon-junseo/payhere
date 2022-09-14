import styled from 'styled-components';

import { MakeOptional } from '@/types/utils';
import { SizeProps, LayoutProps } from '@/types/style';

export const Wrapper = styled.input<SizeProps & MakeOptional<LayoutProps, 'boxShadow'>>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  padding-left: 10px;

  border: none;
  outline: none;
`;
