import styled from 'styled-components';

import { FontSizeProps } from '@/types/style';

export const Wrapper = styled.span<FontSizeProps>`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
`;
