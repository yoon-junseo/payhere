import React from 'react';

import * as S from './style';

interface DescriptionProps {
  children: React.ReactNode;
}

const Description = ({ children }: DescriptionProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default React.memo(Description);
