export interface BooksState {
  bookList: any[];
  isLoading: boolean;
  isError: string;
  perPage: number;
  currentPage: number;
}

export enum Books
