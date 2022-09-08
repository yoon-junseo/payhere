import React, { VFC } from 'react';

import { MakeOptional } from '@/types/utils';
import { SizeProps, LayoutProps } from '@/types/style';

import * as S from './style';

export interface InputProps extends SizeProps, MakeOptional<LayoutProps, 'boxShadow'> {
  type: 'text';
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
  borderRadius,
  backgroundColor,
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
