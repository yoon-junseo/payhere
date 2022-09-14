import React, { useEffect } from 'react';
import Link from '@/components/common/Link';

import { RepositoryState } from '@/lib/api/types';

import useStoreRepository from '@/hooks/useStoreRepository';

import Repository from '@/components/repository/Repository';

import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import * as S from './style';

export interface StoredRepositoryListProps {
  repositoryList: RepositoryState[];
  onClickDelete: (repo: RepositoryState) => void;
}

const StoredRepositoryList = ({ repositoryList, onClickDelete }: StoredRepositoryListProps) => {
  return (
    <S.Container>
      <Link to="/repository">
        <Text fontSize={18} fontWeight={700}>
          저장한 Repository
        </Text>
      </Link>
      <Spacer />
      {repositoryList.map((repo) => (
        <Repository key={repo.id} repository={repo} icon="X" onClick={() => onClickDelete(repo)} />
      ))}
    </S.Container>
  );
};

export default React.memo(StoredRepositoryList);
