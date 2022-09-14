import React, { useRef, useState, useEffect, useMemo } from 'react';

import { RepositoryState } from '@/lib/api/types';
import { getSearchRepositories } from '@/lib/api/search';
import * as swrKeys from '@/lib/constants/swrKeys';

import useDebounce from '@/hooks/useDebounce';
import useStoreRepository from '@/hooks/useStoreRepository';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

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

  const { repositoryList, onClickStore, onClickDelete } = useStoreRepository();

  const { data, isValidating, ref } = useInfiniteScroll({
    key: swrKeys.GET_SEARCH_REPOSITORIES({ q: debouncedValue }),
    isPaused: () => debouncedValue === '',
    api: (_, pageIndex) => getSearchRepositories({ q: debouncedValue, page: pageIndex + 1 }),
  });

  const isInitialFetch = useMemo(() => data === undefined, [data]);

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
        <StoredRepositoryList repositoryList={repositoryList} onClickDelete={onClickDelete} />
        <S.SearchContainer>
          <SearchInput target={target} isLoading={isLoading} onChange={onChange} />
          <S.GridContainer height={height - 70}>
            {data && (
              <>
                {data.map((repo: RepositoryState) => (
                  <S.List key={repo.id}>
                    <Repository repository={repo} icon="Plus" onClick={() => onClickStore('repository', repo)} />
                  </S.List>
                ))}
                <S.InfiniteScrollChecker ref={ref} />
              </>
            )}
          </S.GridContainer>
          {isValidating && (
            <S.SpinnerWrapper top={isInitialFetch ? '50%' : '90%'}>
              <Icon icon="Spinner" width={70} height={70} />
            </S.SpinnerWrapper>
          )}
        </S.SearchContainer>
      </S.Container>
    </AppLayout>
  );
};

export default MainPage;
