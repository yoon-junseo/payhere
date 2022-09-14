export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export interface Id {
  id: number;
  node_id: string;
}

export interface DateState {
  created_at: string;
  updated_at: string;
  closed_at: string;
  pushed_at: string;
}
