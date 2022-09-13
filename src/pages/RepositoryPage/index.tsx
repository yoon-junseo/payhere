import React, { useRef, useState, useEffect } from 'react';

import * as swrKeys from '@/lib/constants/swrKeys';
import { getRepositoryIssues } from '@/lib/api/repos';
import { IssueState } from '@/lib/api/types';

import useStoreRepository from '@/hooks/useStoreRepository';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import AppLayout from '@/components/layout/AppLayout';

import StoredRepositoryList from '@/components/repository/StoredRepositoryList';

import Issue from '@/components/issue/Issue';

import Icon from '@/components/common/Icon';
import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import * as S from './style';

const RepositoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [hasRepository, setHasRepository] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const { repositoryList, onClickDelete } = useStoreRepository();

  const { data, isValidating, ref } = useInfiniteScroll({
    key: repositoryList.map(({ owner, name }) => swrKeys.GET_REPOSITORY_ISSUES({ owner: owner.login, repo: name })),
    isPaused: () => hasRepository,
    api: (_, pageIndex) => {
      return Promise.all(
        repositoryList.map(async ({ owner, name }) => {
          return await getRepositoryIssues({ owner: owner.login, repo: name, page: pageIndex + 1 });
        }),
      ).then((responses) => Promise.all(responses.map((res) => res)));
    },
  });

  useEffect(() => {
    setHasRepository(repositoryList.length !== 0);
  }, [hasRepository]);

  useEffect(() => {
    if (!containerRef.current) return;
    setHeight(containerRef.current.clientHeight);
  }, [containerRef]);

  return (
    <AppLayout>
      <S.Container ref={containerRef}>
        <StoredRepositoryList repositoryList={repositoryList} onClickDelete={onClickDelete} />
        <S.Section>
          <Text fontSize={18} fontWeight={700}>
            Issue 목록
          </Text>
          <Spacer y={45} />
          <S.IssueListContainer height={height - 100}>
            {data && (
              <>
                {data.flat().map((issue: IssueState) => (
                  <Issue key={`${issue.id}${issue.node_id}`} {...issue} />
                ))}
                <S.InfiniteScrollChecker ref={ref} />
              </>
            )}
            {isValidating && <Icon icon="Spinner" width={70} height={70} />}
          </S.IssueListContainer>
        </S.Section>
      </S.Container>
    </AppLayout>
  );
};

export default RepositoryPage;
