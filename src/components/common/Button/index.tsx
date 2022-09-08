import React, { FC } from 'react';

import { MakeOptional } from '@/types/utils';
import { SizeProps, LayoutProps, FontSizeProps } from '@/types/style';

import * as S from './style';

export interface ButtonProps extends SizeProps, MakeOptional<LayoutProps, 'boxShadow'>, Partial<FontSizeProps> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  width,
  height,
  borderRadius,
  backgroundColor,
  fontColor,
  fontSize = 14,
  fontWeight = 500,
  lineHeight = 20,
  children,
}: ButtonProps) => {
  return (
    <S.Wrapper
      type={type}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
