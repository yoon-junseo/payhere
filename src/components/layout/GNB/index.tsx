import React from 'react';

import githubLoginHandler from '@/lib/utils/githubLoginHandler';

import useUser from '@/hooks/useUser';

import Avatar from '@/components/avatar/Avatar';

import Spacer from '@/components/common/Spacer';
import Text from '@/components/common/Text';
import Icon from '@/components/common/Icon';
import Link from '@/components/common/Link';

import * as S from './style';

const GNB = () => {
  const { user } = useUser();

  console.log(user);
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
        {user ? (
          <a href={user.html_url} target="_blank">
            <Avatar width={32} height={32} src={user.avatar_url} />
          </a>
        ) : (
          <S.List style={{ cursor: 'pointer' }} onClick={githubLoginHandler}>
            <Text fontSize={16}>로그인</Text>
          </S.List>
        )}
      </S.InnerContainer>
    </S.Container>
  );
};

export default GNB;
