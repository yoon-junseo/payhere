import { Id, UrlState, UserState, DateState } from '@/lib/api/types';

export interface LabelState extends Id, Omit<UrlState, 'html_url'> {
  name: string;
  color: string | null;
  default: boolean;
  description: string;
}

export interface ReactionState extends Omit<UrlState, 'html_url'> {
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface MilestoneState extends Id, UrlState, Omit<DateState, 'pushed_at'> {
  labels_url: string;
  number: number;
  state: string;
  title: string;
  description: string;
  creator: UserState;
  open_issues: number;
  closed_issues: number;
  due_on: string | null;
}

export interface PerformedViaGithubAppState extends Id {
  slug: string;
  owner: UserState;
}

export interface IssueState extends Id, UrlState, Omit<DateState, 'pushed_at' | 'closed_at'> {
  number: number;
  title: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  user: UserState;
  labels: LabelState[];
  state: string;
  locked: boolean;
  assignee: UserState | null;
  assignees: UserState[];
  milestone: MilestoneState | null;
  active_lock_reason: string | null;
  body: string;
  reactions: ReactionState;
  comments: number;
  closed_at: string | null;
  author_association: string;
  timeline_url: string;
  performed_via_github_app: PerformedViaGithubAppState | null;
  state_reason: string | null;
}
