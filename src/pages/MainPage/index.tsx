import React from 'react';

import AppLayout from '@/components/layout/AppLayout';

import * as S from './style';

const MainPage = () => {
  return (
    <AppLayout>
      <S.Container>
        <S.StoredRepositoryListContainer></S.StoredRepositoryListContainer>
        <S.SearchContainer></S.SearchContainer>
      </S.Container>
    </AppLayout>
  );
};

export default MainPage;
