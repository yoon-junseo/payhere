import request from '@/lib/api/request';

import { GetSearchRepositoriesRequestProps, SearchRepositoriesResponse } from '@/lib/api/types';

const searchBaseUrl = '/search';

const searchUrl = {
  searchRepositories: `${searchBaseUrl}/repositories`,
};

export const getSearchRepositories = ({
  q,
  sort = 'best-match',
  order = 'desc',
  per_page = 10,
  page = 1,
}: GetSearchRepositoriesRequestProps) =>
  request<SearchRepositoriesResponse, null, GetSearchRepositoriesRequestProps>(
    'GET',
    searchUrl.searchRepositories,
    null,
    {
      q,
      sort,
      order,
      per_page,
      page,
    },
  ).then((res) => res.data.items);
