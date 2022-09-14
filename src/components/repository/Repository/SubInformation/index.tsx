import React from 'react';

import { RepositoryState } from '@/lib/api/types';

import Text from '@/components/common/Text';

import IconWithCount, { IconWithCountProps } from '@/components/repository/IconWithCount';

import Theme from '@/styles/Theme';

import * as S from './style';

const SubInformation = ({ ...repository }: RepositoryState) => {
  const iconWithCountList: IconWithCountProps[] = [
    { icon: 'Bookmark', count: repository.stargazers_count },
    {
      icon: 'Fork',
      count: repository.forks_count,
    },
    {
      icon: 'Watcher',
      count: repository.watchers_count,
    },
    {
      icon: 'Opened',
      count: repository.open_issues_count,
    },
  ];

  return (
    <S.Container>
      <Text fontColor={Theme.F_2}>{repository.language}</Text>
      {iconWithCountList.map(({ icon, count }) => (
        <IconWithCount key={`${icon}${count}`} icon={icon} count={count} />
      ))}
    </S.Container>
  );
};

export default React.memo(SubInformation);
