import { Id, UrlState, UserUrlState } from '@/lib/api/types';

export interface OwnerState extends Id, UrlState, UserState {
  title: string;
  description: string | null;
}

export interface UserState extends Id, UrlState, UserUrlState {
  login: string;
  // name: string | null;
  // email: string | null;
  gravatar_id: string;
  type: string;
  site_admin: boolean;
  // starred_at: string;
}
