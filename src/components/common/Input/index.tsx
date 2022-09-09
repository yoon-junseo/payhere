import React, { VFC } from 'react';

import { MakeOptional } from '@/types/utils';
import { SizeProps, LayoutProps } from '@/types/style';

import Theme from '@/styles/Theme';

import * as S from './style';

export interface InputProps extends SizeProps, Partial<LayoutProps> {
  type: 'text' | 'search';
  id: string;
  name: string;
  value: string;
  maxLength?: number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: VFC<InputProps> = ({
  type,
  id,
  name,
  width,
  height,
  borderRadius = 0,
  backgroundColor = Theme.M_1,
  value,
  maxLength,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <S.Wrapper
      type={type}
      id={id}
      name={name}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);
