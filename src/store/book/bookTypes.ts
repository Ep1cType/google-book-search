import {IBook} from "../../types/BookTypes";

export interface BookState {
  bookList: IBook[];
  bookInfo: IBook | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: string;
  perPage: number;
  startIndex: number;
  totalCount: number;
}

export enum BookActionEnum {
  SET_BOOK_LIST = "SET_BOOK_LIST",
  SET_BOOK_INFO = "SET_BOOK_INFO",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_IS_FETCHING = "SET_IS_FETCHING",
  SET_IS_ERROR = "SET_IS_ERROR",
  SET_START_INDEX = "SET_START_INDEX",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  SET_FETCHED_BOOKS = "SET_FETCHED_BOOKS",
}

export interface SetBookListAction {
  type: BookActionEnum.SET_BOOK_LIST;
  payload: IBook[];
}

export interface SetBookInfoAction {
  type: BookActionEnum.SET_BOOK_INFO;
  payload: IBook;
}

export interface SetIsLoadingAction {
  type: BookActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetIsFetchingAction {
  type: BookActionEnum.SET_IS_FETCHING;
  payload: boolean;
}

export interface SetIsErrorAction {
  type: BookActionEnum.SET_IS_ERROR;
  payload: string;
}

export interface SetStartIndexAction {
  type: BookActionEnum.SET_START_INDEX;
  payload: number;
}

export interface SetTotalCountAction {
  type: BookActionEnum.SET_TOTAL_COUNT;
  payload: number;
}

export interface SetFetchedBooksAction {
  type: BookActionEnum.SET_FETCHED_BOOKS;
  payload: IBook[];
}

export type BookActions =
  SetBookListAction | SetIsLoadingAction | SetIsErrorAction | SetStartIndexAction | SetTotalCountAction | SetFetchedBooksAction | SetIsFetchingAction | SetBookInfoAction



