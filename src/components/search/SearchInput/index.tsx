import React from 'react';

import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';

import * as S from './style';

export interface SearchInputProps {
  target: string;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ target, isLoading, onChange }: SearchInputProps) => {
  return (
    <S.Container>
      <Input
        width={250}
        height={40}
        type="search"
        id="search"
        name="search"
        value={target}
        placeholder="public repository"
        onChange={onChange}
      />
      {isLoading ? <Icon icon="Spinner" width={25} height={25} /> : <Icon icon="Search" hasCursor />}
    </S.Container>
  );
};

export default SearchInput;
