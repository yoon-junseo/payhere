import { Id, NodeId, UrlState, UserState } from '@/lib/api/types';

export interface LabelState extends Id, NodeId, Omit<UrlState, 'html_url'> {
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
  rocker: number;
  eyes: number;
}

export interface MilestoneState extends Id, NodeId, UrlState {
  labels_url: string;
  number: number;
  state: string;
  title: string;
  description: string;
  creator: UserState;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  due_on: string | null;
}

export interface IssueState extends Id, NodeId, UrlState {
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
  comments: number;
  pull_request: UrlState & {
    diff_url: string | null;
    patch_url: string | null;
    merged_at: string | null;
  };
  closed_at: string | null;
  created_at: string;
  updated_at: string;
  closed_by: UserState;
  author_association: string;
  state_reason: string;
}
