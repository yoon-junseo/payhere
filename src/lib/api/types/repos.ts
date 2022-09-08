import { Id, NodeId, UrlState, RepositoryUrlState, OwnerState } from '@/lib/api/types';

export interface LicenseState extends UrlState {
  title: string;
  description: string;
  key: string;
  spx_id: string | null;
  node_id: string;
}

export interface RepositoryState extends Id, NodeId, RepositoryUrlState {
  name: string;
  full_name: string;
  private: boolean;
  owner: OwnerState | null;
  description: string | null;
  fork: boolean;
  created_at: string;
  update_at: string;
  pushed_at: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
  forks: number;
  open_issues: number;
  watchers: number;
  topics: Array<string>;
  has_issues: boolean;
  has_projects: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  license: LicenseState[] | null;
}

export interface GetRepositoryIssuesProps {
  owner: string;
  repo: string;
}

export interface GetRepositoryIssuesParams {
  milestone: string;
  state: string; // open, closed, all
  assignee: string;
  creator: string;
  mentioned: string;
  labels: string;
  sort: string; // created, updated, comments
  direction: string; // desc, asc
  since: string;
  per_page: number; // 30
  page: number; // 1
}
