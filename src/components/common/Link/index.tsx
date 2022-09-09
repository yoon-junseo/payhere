import React from 'react';

import * as S from './style';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  return <S.Wrapper to={to}>{children}</S.Wrapper>;
};

export default Link;
