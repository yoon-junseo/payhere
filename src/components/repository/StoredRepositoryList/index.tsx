import React from 'react';
import Link from '@/components/common/Link';

import { RepositoryState } from '@/lib/api/types';

import Repository from '@/components/repository/Repository';

import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import * as S from './style';

export interface StoredRepositoryListProps {
  repositoryList: RepositoryState[];
}

const StoredRepositoryList = ({ repositoryList }: StoredRepositoryListProps) => {
  return (
    <S.Container>
      <Link to="/repository">
        <Text fontSize={18} fontWeight={700}>
          저장한 Repository
        </Text>
      </Link>
      <Spacer />
      {repositoryList.map((repo) => (
        <Repository key={repo.id} {...repo} />
      ))}
    </S.Container>
  );
};

export default StoredRepositoryList;
