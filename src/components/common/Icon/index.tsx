import React, { VFC } from 'react';
import styled, { css } from 'styled-components';

import * as Icons from '@/components/common/Icon/Icons';

import { IconProps, IconWrapperProps } from './type';

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.rotate && {
      transform: `rotate(${props.rotate}deg)`,
    }};
  ${(props) =>
    props.isButton &&
    css`
      cursor: pointer;
    `}

  svg {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;

const Icon: VFC<IconProps> = ({ icon, width, height, rotate, isButton = false, onClick, ...props }: IconProps) => {
  const IconComponent = Icons[icon];

  return (
    <IconWrapper {...props} width={width} height={height} rotate={rotate} isButton={isButton} onClick={onClick}>
      <IconComponent {...props} width={width} height={height} />
    </IconWrapper>
  );
};

export default Icon;
