import React, { useRef, useState, useEffect } from 'react';
import Link from '@/components/common/Link';

import AppLayout from '@/components/layout/AppLayout';

import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import SearchInput from '@/components/search/SearchInput';

import Repository from '@/components/repository/Repository';

const repo = {
  id: 466362242,
  node_id: 'R_kgDOG8wfgg',
  name: 'eotteok_frontend',
  full_name: 'CodingWasabi/eotteok_frontend',
  private: false,
  owner: {
    login: 'CodingWasabi',
    id: 77946529,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjc3OTQ2NTI5',
    avatar_url: 'https://avatars.githubusercontent.com/u/77946529?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/CodingWasabi',
    html_url: 'https://github.com/CodingWasabi',
    followers_url: 'https://api.github.com/users/CodingWasabi/followers',
    following_url: 'https://api.github.com/users/CodingWasabi/following{/other_user}',
    gists_url: 'https://api.github.com/users/CodingWasabi/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/CodingWasabi/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/CodingWasabi/subscriptions',
    organizations_url: 'https://api.github.com/users/CodingWasabi/orgs',
    repos_url: 'https://api.github.com/users/CodingWasabi/repos',
    events_url: 'https://api.github.com/users/CodingWasabi/events{/privacy}',
    received_events_url: 'https://api.github.com/users/CodingWasabi/received_events',
    type: 'Organization',
    site_admin: false,
  },
  html_url: 'https://github.com/CodingWasabi/eotteok_frontend',
  description: '시험 공부 유형을 파악하고, 시험 일정 관리를 해주는 서비스',
  fork: false,
  url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend',
  forks_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/forks',
  keys_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/teams',
  hooks_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/hooks',
  issue_events_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/issues/events{/number}',
  events_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/events',
  assignees_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/assignees{/user}',
  branches_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/branches{/branch}',
  tags_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/tags',
  blobs_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/languages',
  stargazers_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/stargazers',
  contributors_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/contributors',
  subscribers_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/subscribers',
  subscription_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/subscription',
  commits_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/contents/{+path}',
  compare_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/merges',
  archive_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/downloads',
  issues_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/issues{/number}',
  pulls_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/CodingWasabi/eotteok_frontend/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/labels{/name}',
  releases_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/releases{/id}',
  deployments_url: 'https://api.github.com/repos/CodingWasabi/eotteok_frontend/deployments',
  created_at: '2022-03-05T05:45:54Z',
  updated_at: '2022-08-16T23:29:45Z',
  pushed_at: '2022-08-16T23:27:58Z',
  git_url: 'git://github.com/CodingWasabi/eotteok_frontend.git',
  ssh_url: 'git@github.com:CodingWasabi/eotteok_frontend.git',
  clone_url: 'https://github.com/CodingWasabi/eotteok_frontend.git',
  svn_url: 'https://github.com/CodingWasabi/eotteok_frontend',
  homepage: 'https://how-to-study.kro.kr/',
  size: 14079,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'TypeScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 3,
  license: null,
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [],
  visibility: 'public',
  forks: 0,
  open_issues: 3,
  watchers: 0,
  default_branch: 'develop',
  score: 1.0,
};

import * as S from './style';

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    setHeight(containerRef.current.clientHeight);
  }, [containerRef]);

  return (
    <AppLayout>
      <S.Container ref={containerRef}>
        <S.StoredRepositoryListContainer>
          <Link to="/repository">
            <Text fontSize={18} fontWeight={700}>
              저장한 Repository
            </Text>
          </Link>
          <Spacer />
          <Repository {...repo} />
          <Repository {...repo} />
          <Repository {...repo} />
          <Repository {...repo} />
        </S.StoredRepositoryListContainer>
        <S.SearchContainer>
          <SearchInput />
          <Spacer y={50} />
          <S.GridContainer height={height - 120}>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
            <S.List>
              <Repository {...repo} />
            </S.List>
          </S.GridContainer>
        </S.SearchContainer>
      </S.Container>
    </AppLayout>
  );
};

export default MainPage;
