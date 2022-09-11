import React, { useRef, useState, useEffect } from 'react';

import { repositoryInfo, repositoryList } from '@/mock';

import AppLayout from '@/components/layout/AppLayout';

import SearchInput from '@/components/search/SearchInput';

import Repository from '@/components/repository/Repository';
import StoredRepositoryList from '@/components/repository/StoredRepositoryList';

import * as S from './style';

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    setHeight(containerRef.current.clientHeight);
  }, [containerRef]);

  return (
    <AppLayout>
      <S.Container ref={containerRef}>
        <StoredRepositoryList repositoryList={repositoryList} />
        <S.SearchContainer>
          <SearchInput />
          <S.GridContainer height={height - 70}>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
            <S.List>
              <Repository {...repositoryInfo} />
            </S.List>
          </S.GridContainer>
        </S.SearchContainer>
      </S.Container>
    </AppLayout>
  );
};

export default MainPage;
