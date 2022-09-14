import React from 'react';

import Icon from '@/components/common/Icon';

import { SizeProps } from '@/types/style';
import { MakeOptional } from '@/types/utils';

import * as S from './style';

export interface SelectProps extends SizeProps {
  value: string;
  optionList: string[];
  fontSize?: number;
  icon?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: any) => void;
}

const Select = ({ icon, optionList, placeholder, value, fontSize, onChange, ...otherProps }: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { options, selectedIndex } = e.target;
    onChange?.(options?.[selectedIndex]?.value);
  };

  return (
    <S.Container {...otherProps}>
      <S.InnerSelect value={value} onChange={handleChange} required>
        <option value="">{placeholder}</option>
        {optionList && optionList.map((value, index) => <option key={index}>{value}</option>)}
      </S.InnerSelect>
      <S.IconWrapper>{icon ? icon : <Icon icon="Arrow" />}</S.IconWrapper>
    </S.Container>
  );
};

export default React.memo(Select);
