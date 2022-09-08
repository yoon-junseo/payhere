import React, { FC } from 'react';

import { FontSizeProps } from '@/types/style';

import * as S from './style';

export interface TextProps extends Partial<FontSizeProps> {
  children: React.ReactNode;
}

const Text: FC<TextProps> = ({
  fontColor = 'ffffff',
  fontSize = 14,
  fontWeight = 500,
  lineHeight = 20,
  letterSpacing = -0.3,
  children,
}: TextProps) => {
  return (
    <S.Wrapper
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    >
      {children}
    </S.Wrapper>
  );
};

export default Text;
