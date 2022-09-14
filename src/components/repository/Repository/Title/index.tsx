import React from 'react';

import { RepositoryState } from '@/lib/api/types';

import Anchor from '@/components/common/Anchor';
import Text from '@/components/common/Text';

const Title = ({ ...repository }: RepositoryState) => {
  return (
    <Text fontSize={16} fontWeight={600}>
      <Anchor href={repository.owner.html_url} target="_blank">
        [{repository.owner.login}]
      </Anchor>{' '}
      <Anchor href={repository.html_url} target="_blank">
        {repository.name}
      </Anchor>
    </Text>
  );
};

export default React.memo(Title);
