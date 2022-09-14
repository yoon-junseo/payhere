import styled from 'styled-components';

import { SizeProps } from '@/types/style';

export const Wrapper = styled.img<SizeProps>`
  border-radius: 50%;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
