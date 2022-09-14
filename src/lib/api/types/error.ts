export interface ErrorResponse {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}

export interface DataState {
  data: { document_url: string; message: string };
}
