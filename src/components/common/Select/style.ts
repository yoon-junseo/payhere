import styled, { css } from 'styled-components';

import { SelectProps } from '@/components/common/Select';

import { SizeProps } from '@/types/style';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div<SizeProps>`
  position: relative;

  overflow: hidden;

  display: inline-flex;

  ${boxDesign(8)}

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export const InnerSelect = styled.select<Partial<SelectProps>>`
  cursor: pointer;

  width: 100%;

  border: none;
  outline: none;
  appearance: none;

  padding-left: 12px;

  font-size: ${({ fontSize }) => fontSize}px;

  ${({ value }) => css`
    ${value ||
    css`
      color: ${Theme.F_3};
    `}
  `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 100%;

  pointer-events: none;
`;
