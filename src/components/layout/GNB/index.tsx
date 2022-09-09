import React from 'react';

import githubLoginHandler from '@/lib/utils/githubLoginHandler';

import Spacer from '@/components/common/Spacer';
import Text from '@/components/common/Text';
import Icon from '@/components/common/Icon';
import Link from '@/components/common/Link';

import * as S from './style';

const GNB = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.List>
          <Link to="/">
            <Icon icon="Github" />
          </Link>
        </S.List>
        <Spacer x={10} />
        <S.List>
          <Link to="/repository">
            <Text fontSize={16} fontWeight={700}>
              저장한 Repository
            </Text>
          </Link>
        </S.List>
        <S.List onClick={githubLoginHandler}>
          <Text fontSize={16}>로그인</Text>
        </S.List>
      </S.InnerContainer>
    </S.Container>
  );
};

export default GNB;
