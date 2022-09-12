import request from '@/lib/api/request';

import { GetRepositoryIssuesProps, GetRepositoryIssuesParams, IssueState } from '@/lib/api/types';

const reposBaseUrl = '/repos';

const reposUrl = {
  repositoryIssues: ({ owner, repo }: GetRepositoryIssuesProps) => `${reposBaseUrl}/${owner}/${repo}/issues`,
};

export const getRepositoryIssues = ({
  owner,
  repo,
  milestone,
  state = 'open',
  assignee,
  creator,
  mentioned,
  labels,
  sort = 'created',
  direction = 'desc',
  since,
  per_page = 10,
  page = 1,
}: GetRepositoryIssuesProps & Partial<GetRepositoryIssuesParams>) =>
  request<IssueState[], null, Partial<GetRepositoryIssuesParams>>(
    'GET',
    reposUrl.repositoryIssues({ owner, repo }),
    null,
    {
      milestone,
      state,
      assignee,
      creator,
      mentioned,
      labels,
      sort,
      direction,
      since,
      per_page,
      page,
    },
  ).then((res) => res.data);
