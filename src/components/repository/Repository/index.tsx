import React, { useState, useCallback } from 'react';

import { RepositoryState } from '@/lib/api/types';

import Icon from '@/components/common/Icon';
import Spacer from '@/components/common/Spacer';

import Title from '@/components/repository/Repository/Title';
import Description from '@/components/repository/Repository/Description';
import SubInformation from '@/components/repository/Repository/SubInformation';

import * as S from './style';

export interface RepositoryProps {
  repository: RepositoryState;
  icon: 'Plus' | 'X';
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Repository = ({ repository, icon, onClick }: RepositoryProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const mouseOverHandler = useCallback(() => {
    setIsMouseOver(true);
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    setIsMouseOver(false);
  }, []);

  return (
    <S.Container onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
      <Title {...repository} />
      <Spacer y={10} />
      <Description>{repository.description}</Description>
      <Spacer y={10} />
      <SubInformation {...repository} />
      {isMouseOver && (
        <S.IconWrapper onClick={onClick}>
          <Icon icon={icon} width={24} height={24} hasCursor />
        </S.IconWrapper>
      )}
    </S.Container>
  );
};

export default React.memo(Repository);
