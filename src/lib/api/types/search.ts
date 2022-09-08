import { RepositoryUrlState, RepositoryState } from '@/lib/api/types';

export interface GetSearchRepositoriesRequestProps {
  q: string;
  sort?: 'best-match' | 'starts' | 'forks' | 'help-wanted-issues' | 'updated';
  order?: 'desc' | 'asc';
  per_page?: number;
  page?: number;
}

export interface SearchRepositoriesResponse extends RepositoryUrlState {
  total_count: number;
  incompleted_results: boolean;
  items: RepositoryState[];
}
