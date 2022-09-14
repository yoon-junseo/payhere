import React from 'react';

import { LabelState } from '@/lib/api/types';

import Theme from '@/styles/Theme';

import * as S from './style';

export interface LabelProps extends Pick<LabelState, 'name' | 'color'> {}

const Label = ({ name, color }: LabelProps) => {
  return <S.Wrapper color={color ? `#${color}` : Theme.M_1}>{name}</S.Wrapper>;
};

export default Label;
