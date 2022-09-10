import React from 'react';

import GNB from '@/components/layout/GNB';

import * as S from './style';

export interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <GNB />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default AppLayout;
