import React, { useState } from 'react';

import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';

import * as S from './style';

const SearchInput = () => {
  const [target, setTarget] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  };

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
      <Icon icon="Search" hasCursor />
    </S.Container>
  );
};

export default SearchInput;
