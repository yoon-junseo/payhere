import React, { useState, useCallback } from 'react';

import { IssueState } from '@/lib/api/types';

import useResponsive from '@/hooks/useResponsive';

import AvatarList from '@/components/avatar/AvatarList';

import Anchor from '@/components/common/Anchor';
import Icon from '@/components/common/Icon';
import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import Label from '@/components/issue/Label';

import Theme from '@/styles/Theme';

import * as S from './style';

const Issue = ({ ...issue }: IssueState) => {
  const isLargeThanMobile = useResponsive() > 480;

  const [, ownerAndRepoName] = issue.repository_url.replace('https://', '').split('/repos/');

  const [isClosed] = useState(issue.state === 'closed');

  const getSubInfo = useCallback(() => {
    let info = `#${issue.number}`;
    if (issue.state === 'open') {
      const [date] = issue.created_at.split('T');
      info += ` opened at ${date} by `;
    }

    if (issue.state === 'closed') {
      if (!issue.closed_at) return;
      const [date] = issue.closed_at.split('T');
      info += ` closed at ${date} by `;
    }

    return info;
  }, [issue]);

  return (
    <S.Container>
      <Icon icon={isClosed ? 'Closed' : 'Opened'} width={20} height={20} color={isClosed ? Theme.M_2 : ''} />
      <Spacer x={10} />
      <S.InfoContainer>
        <S.MainInfo>
          <Anchor href={`https://github.com/${ownerAndRepoName}`} target="_blank">
            <Text fontColor={Theme.F_2} fontSize={16} fontWeight={600}>
              {ownerAndRepoName}
            </Text>
          </Anchor>
          <Spacer x={3} />
          <Anchor href={`https://github.com/${ownerAndRepoName}/issues/${issue.number}`} target="_blank">
            <Text fontSize={16} fontWeight={600}>
              {issue.title}
            </Text>
          </Anchor>

          <Spacer x={10} />

          <S.LabelContainer>
            {issue.labels.map(({ id, color, name }) => (
              <Label key={id} color={color} name={name} />
            ))}
          </S.LabelContainer>
        </S.MainInfo>
        <S.SubInfo>
          {getSubInfo()}
          {issue.state === 'open' ? (
            <Anchor href={`https://github.com/${issue.assignee?.login}`} target="_blank">
              {issue.assignee?.login}
            </Anchor>
          ) : (
            <Anchor href={`https://github.com/${issue.user.login}`} target="_blank">
              {issue.user.login}
            </Anchor>
          )}
        </S.SubInfo>
      </S.InfoContainer>
      <S.AvatarContainer>{isLargeThanMobile && <AvatarList assignees={issue.assignees} />}</S.AvatarContainer>
    </S.Container>
  );
};

export default Issue;
