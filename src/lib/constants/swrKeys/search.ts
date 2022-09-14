import { GetSearchRepositoriesRequestProps } from '@/lib/api/types';

export const GET_SEARCH_REPOSITORIES = ({
  q,
  sort = 'best-match',
  order = 'desc',
  per_page = 10,
  page = 1,
}: GetSearchRepositoriesRequestProps) =>
  `/search/repositories?q=${q}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`;
