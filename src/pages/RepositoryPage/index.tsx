import React, { useRef, useState, useEffect } from 'react';

import useStoreRepository from '@/hooks/useStoreRepository';

import { openedIssue } from '@/mock';

import AppLayout from '@/components/layout/AppLayout';

import StoredRepositoryList from '@/components/repository/StoredRepositoryList';

import Issue from '@/components/issue/Issue';

import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import * as S from './style';

const RepositoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);

  const { repositoryList, onClickDelete } = useStoreRepository();

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
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
            <Issue {...openedIssue} />
          </S.IssueListContainer>
        </S.Section>
      </S.Container>
    </AppLayout>
  );
};

export default RepositoryPage;
