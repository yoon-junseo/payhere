import styled from 'styled-components';

import { MakeOptional } from '@/types/utils';
import { SizeProps, LayoutProps } from '@/types/style';

export const Wrapper = styled.input<SizeProps & MakeOptional<LayoutProps, 'boxShadow'>>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  padding-left: 15px;
`;
