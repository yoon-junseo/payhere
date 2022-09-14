export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export interface Id {
  id: number;
  node_id: string;
}
