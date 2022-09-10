import React from 'react';

import Avatar from '@/components/avatar/Avatar';

import { UserState } from '@/lib/api/types';

import * as S from './style';

export interface AvatarListProps {
  assignees: Omit<UserState, 'name' | 'email' | 'starred_at'>[];
}

const AvatarList = ({ assignees }: AvatarListProps) => {
  return (
    <S.Container>
      {assignees.map((assignee) => (
        <Avatar key={assignee.id} src={assignee.avatar_url} />
      ))}
    </S.Container>
  );
};

export default AvatarList;
