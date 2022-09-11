import { GetRepositoryIssuesProps, GetRepositoryIssuesParams } from '@/lib/api/types';

export const GET_REPOSITORY_ISSUES = ({
  owner,
  repo,
  page,
}: GetRepositoryIssuesProps & Partial<GetRepositoryIssuesParams>) => `/repos/${owner}/${repo}/issues/page=${page}`;
