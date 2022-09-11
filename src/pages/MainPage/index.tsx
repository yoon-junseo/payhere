import React, { useRef, useState, useEffect } from 'react';

import { RepositoryState } from '@/lib/api/types';
import { getSearchRepositories } from '@/lib/api/search';
import * as swrKeys from '@/lib/constants/swrKeys';

import useDebounce from '@/hooks/useDebounce';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import { repositoryList } from '@/mock';

import AppLayout from '@/components/layout/AppLayout';

import Icon from '@/components/common/Icon';

import SearchInput from '@/components/search/SearchInput';

import Repository from '@/components/repository/Repository';
import StoredRepositoryList from '@/components/repository/StoredRepositoryList';

import * as S from './style';

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);
  const [target, setTarget] = useState<string>('');

  const [isLoading, debouncedValue] = useDebounce<string>(target, 500);

  const { data, error, isValidating, ref } = useInfiniteScroll({
    key: swrKeys.GET_SEARCH_REPOSITORIES({ q: debouncedValue }),
    isPaused: () => debouncedValue === '',
    api: (key, pageIndex) => getSearchRepositories({ q: debouncedValue, page: pageIndex + 1 }),
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    setHeight(containerRef.current.clientHeight);
  }, [containerRef]);

  return (
    <AppLayout>
      <S.Container ref={containerRef}>
        <StoredRepositoryList repositoryList={repositoryList} />
        <S.SearchContainer>
          <SearchInput target={target} isLoading={isLoading} onChange={onChange} />
          <S.GridContainer height={height - 70}>
            {data && (
              <>
                {data.flat().map((repo: RepositoryState) => (
                  <S.List>
                    <Repository {...repo} />
                  </S.List>
                ))}
                <S.InfiniteScrollChecker ref={ref} />
              </>
            )}
          </S.GridContainer>
          {isValidating && (
            <S.SpinnerWrapper>
              <Icon icon="Spinner" width={70} height={70} />
            </S.SpinnerWrapper>
          )}
        </S.SearchContainer>
      </S.Container>
    </AppLayout>
  );
};

export default MainPage;
