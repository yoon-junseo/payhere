import React from 'react';

import { SizeProps } from '@/types/style';

import * as S from './style';

export interface AvatarProps extends Partial<SizeProps> {
  src: string;
}

const Avatar = ({ width = 24, height = 24, src }: AvatarProps) => {
  return <S.Wrapper width={width} height={height} src={src} alt="avatar" />;
};

export default Avatar;
