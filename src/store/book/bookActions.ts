import {
  BookActionEnum, SetBookInfoAction,
  SetBookListAction,
  SetFetchedBooksAction,
  SetIsErrorAction,
  SetIsFetchingAction,
  SetIsLoadingAction,
  SetStartIndexAction,
  SetTotalCountAction
} from "./bookTypes";
import {AppDispatch} from "../index";
import BookService from "../../services/BookService";
import {IBook} from "../../types/BookTypes";


export const BookActions = {
  setBookList: (bookList: IBook[]): SetBookListAction => ({
    type: BookActionEnum.SET_BOOK_LIST,
    payload: bookList,
  }),
  setBookInfo: (bookInfo: IBook): SetBookInfoAction => ({
    type: BookActionEnum.SET_BOOK_INFO,
    payload: bookInfo
  }),
  setFetchedBooks: (bookList: IBook[]): SetFetchedBooksAction => ({
    type: BookActionEnum.SET_FETCHED_BOOKS,
    payload: bookList,
  }),
  setIsLoading: (bool: boolean): SetIsLoadingAction => ({
    type: BookActionEnum.SET_IS_LOADING,
    payload: bool,
  }),
  setIsFetching: (bool: boolean): SetIsFetchingAction => ({
    type: BookActionEnum.SET_IS_FETCHING,
    payload: bool,
  }),
  setIsError: (error: string): SetIsErrorAction => ({
    type: BookActionEnum.SET_IS_ERROR,
    payload: error,
  }),
  setTotalCount: (totalCount: number): SetTotalCountAction => ({
    type: BookActionEnum.SET_TOTAL_COUNT,
    payload: totalCount,
  }),
  setStartIndex: (currentPage: number): SetStartIndexAction => ({
    type: BookActionEnum.SET_START_INDEX,
    payload: currentPage,
  }),
  fetchBookList: (searchValue: string, startIndex: number, category: string, sortValue: string) => async (dispatch: AppDispatch) => {
    debugger;
    try {
      dispatch(BookActions.setIsError(''))
      dispatch(BookActions.setIsLoading(true));
      dispatch(BookActions.setBookList([]));
      dispatch(BookActions.setTotalCount(0));
      const response = await BookService.getBookList(searchValue, startIndex, category, sortValue);
      console.log(response.data.items);
      if (!response.data.totalItems) {
        dispatch(BookActions.setIsError("Не найдено"));
        return;
      }
      dispatch(BookActions.setTotalCount(response.data.totalItems));
      dispatch(BookActions.setBookList(response.data.items));
    } catch (e) {
      dispatch(BookActions.setIsError("Не найдено"));
    } finally {
      dispatch(BookActions.setIsLoading(false));
    }
  },
  fetchAdditionalBooks: (searchValue: string, startIndex: number, category: string, sortValue: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(BookActions.setIsError(''))
      dispatch(BookActions.setIsFetching(true));
      const response = await BookService.getBookList(searchValue, startIndex, category, sortValue);
      dispatch(BookActions.setFetchedBooks(response.data.items));
    } catch (e) {
      dispatch(BookActions.setIsError("Не удалось подгрузить данные"));
    } finally {
      dispatch(BookActions.setIsFetching(false));
    }
  },
  fetchBookInfo: (bookID: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      const response = await BookService.getBookInfo(bookID);
      console.log(response.data);
      dispatch(BookActions.setBookInfo(response.data))
    } catch (e) {

    } finally {

    }
  }
}
