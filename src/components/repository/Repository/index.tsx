import React, { useState } from 'react';

import { RepositoryState } from '@/lib/api/types';

import Anchor from '@/components/common/Anchor';
import Icon from '@/components/common/Icon';
import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import IconWithCount, { IconWithCountProps } from '@/components/repository/IconWithCount';

import Theme from '@/styles/Theme';

import * as S from './style';

export interface RepositoryProps {
  repository: RepositoryState;
  icon: 'Plus' | 'X';
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Repository = ({ repository, icon, onClick }: RepositoryProps) => {
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

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const mouseOverHandler = () => {
    setIsMouseOver(true);
  };

  const mouseLeaveHandler = () => {
    setIsMouseOver(false);
  };

  return (
    <S.Container onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
      <Text fontSize={16} fontWeight={600}>
        <Anchor href={repository.owner.html_url} target="_blank">
          [{repository.owner.login}]
        </Anchor>{' '}
        <Anchor href={repository.html_url} target="_blank">
          {repository.name}
        </Anchor>
      </Text>
      <Spacer y={10} />
      <S.DescriptionWrapper>{repository.description}</S.DescriptionWrapper>
      <Spacer y={10} />
      <S.OtherInfoContainer>
        <Text fontColor={Theme.F_2}>{repository.language}</Text>
        {iconWithCountList.map(({ icon, count }) => (
          <IconWithCount key={`${icon}${count}`} icon={icon} count={count} />
        ))}
      </S.OtherInfoContainer>
      {isMouseOver && (
        <S.IconWrapper onClick={onClick}>
          <Icon icon={icon} width={24} height={24} hasCursor />
        </S.IconWrapper>
      )}
    </S.Container>
  );
};

export default React.memo(Repository);
