import React from 'react';
import { Story } from '@storybook/react';

import { IssueState } from '@/lib/api/types';

import { openedIssue, closedIssue } from '@/mock';

import Issue from '@/components/issue/Issue';

export default {
  component: Issue,
  title: 'issue/Issue',
};

const Template: Story<IssueState> = ({ ...args }: IssueState) => <Issue {...args} />;

export const Open = Template.bind({});
Open.args = {
  url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/issues/25',
  repository_url: 'https://api.github.com/repos/CodingWasabi/trti_frontend',
  labels_url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/issues/25/labels{/name}',
  comments_url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/issues/25/comments',
  events_url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/issues/25/events',
  html_url: 'https://github.com/CodingWasabi/trti_frontend/issues/25',
  id: 1090098976,
  node_id: 'I_kwDOGYItDc5A-Zcg',
  number: 25,
  title: '[FEAT] API 및 기능 구현',
  user: {
    login: 'yoon-junseo',
    id: 28842641,
    node_id: 'MDQ6VXNlcjI4ODQyNjQx',
    avatar_url: 'https://avatars.githubusercontent.com/u/28842641?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/yoon-junseo',
    html_url: 'https://github.com/yoon-junseo',
    followers_url: 'https://api.github.com/users/yoon-junseo/followers',
    following_url: 'https://api.github.com/users/yoon-junseo/following{/other_user}',
    gists_url: 'https://api.github.com/users/yoon-junseo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/yoon-junseo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/yoon-junseo/subscriptions',
    organizations_url: 'https://api.github.com/users/yoon-junseo/orgs',
    repos_url: 'https://api.github.com/users/yoon-junseo/repos',
    events_url: 'https://api.github.com/users/yoon-junseo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/yoon-junseo/received_events',
    type: 'User',
    site_admin: false,
  },
  labels: [
    {
      id: 3548341070,
      node_id: 'LA_kwDOGYItDc7Tf2NO',
      url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/labels/wontfix',
      name: 'wontfix',
      color: 'ffffff',
      default: true,
      description: 'This will not be worked on',
    },
    {
      id: 3566983803,
      node_id: 'LA_kwDOGYItDc7Um9p7',
      url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/labels/feature',
      name: 'feature',
      color: '52D8F0',
      default: false,
      description: '기능 개발',
    },
  ],
  state: 'open',
  locked: false,
  assignee: {
    login: 'yoon-junseo',
    id: 28842641,
    node_id: 'MDQ6VXNlcjI4ODQyNjQx',
    avatar_url: 'https://avatars.githubusercontent.com/u/28842641?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/yoon-junseo',
    html_url: 'https://github.com/yoon-junseo',
    followers_url: 'https://api.github.com/users/yoon-junseo/followers',
    following_url: 'https://api.github.com/users/yoon-junseo/following{/other_user}',
    gists_url: 'https://api.github.com/users/yoon-junseo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/yoon-junseo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/yoon-junseo/subscriptions',
    organizations_url: 'https://api.github.com/users/yoon-junseo/orgs',
    repos_url: 'https://api.github.com/users/yoon-junseo/repos',
    events_url: 'https://api.github.com/users/yoon-junseo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/yoon-junseo/received_events',
    type: 'User',
    site_admin: false,
  },
  assignees: [
    {
      login: 'yoon-junseo',
      id: 28842641,
      node_id: 'MDQ6VXNlcjI4ODQyNjQx',
      avatar_url: 'https://avatars.githubusercontent.com/u/28842641?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/yoon-junseo',
      html_url: 'https://github.com/yoon-junseo',
      followers_url: 'https://api.github.com/users/yoon-junseo/followers',
      following_url: 'https://api.github.com/users/yoon-junseo/following{/other_user}',
      gists_url: 'https://api.github.com/users/yoon-junseo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/yoon-junseo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/yoon-junseo/subscriptions',
      organizations_url: 'https://api.github.com/users/yoon-junseo/orgs',
      repos_url: 'https://api.github.com/users/yoon-junseo/repos',
      events_url: 'https://api.github.com/users/yoon-junseo/events{/privacy}',
      received_events_url: 'https://api.github.com/users/yoon-junseo/received_events',
      type: 'User',
      site_admin: false,
    },
  ],
  milestone: null,
  comments: 0,
  created_at: '2021-12-28T19:56:56Z',
  updated_at: '2022-09-09T13:22:10Z',
  closed_at: null,
  author_association: 'MEMBER',
  active_lock_reason: null,
  body: '## 설명\r\n- API를 연동하면서 기능 구현\r\n- mockData 삭제 필요\r\n\r\n## ToDo\r\n- [x] 로그인\r\n- [ ] 메인페이지\r\n- [x] 그룹 생성 페이지\r\n- [ ] TRTI 검사 페이지',
  reactions: {
    url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/issues/25/reactions',
    total_count: 0,
    '+1': 0,
    '-1': 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  timeline_url: 'https://api.github.com/repos/CodingWasabi/trti_frontend/issues/25/timeline',
  performed_via_github_app: null,
  state_reason: null,
};

export const Closed = Template.bind({});
Closed.args = closedIssue;
