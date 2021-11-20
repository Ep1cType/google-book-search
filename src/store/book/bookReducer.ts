import {BookActionEnum, BookActions, BookState} from "./bookTypes";


const initialState: BookState = {
  bookList: [],
  bookInfo: null,
  startIndex: 0,
  isError: "",
  isLoading: false,
  isFetching: false,
  perPage: 30,
  totalCount: 0,
}

export default function bookReducer(state = initialState, action: BookActions): BookState {
  switch (action.type) {
    case BookActionEnum.SET_BOOK_LIST: {
      return {
        ...state,
        bookList: action.payload
      }
    }
    case BookActionEnum.SET_BOOK_INFO: {
      return {
        ...state,
        bookInfo: action.payload
      }
    }
    case BookActionEnum.SET_START_INDEX: {
      return {
        ...state,
        startIndex: state.startIndex + action.payload
      }
    }
    case BookActionEnum.SET_IS_ERROR: {
      return {
        ...state,
        isError: action.payload
      }
    }
    case BookActionEnum.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case BookActionEnum.SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case BookActionEnum.SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.payload
      }
    }
    case BookActionEnum.SET_FETCHED_BOOKS: {
      return {
        ...state,
        bookList: [...state.bookList, ...action.payload]
      }
    }
    default:
      return state;
  }

}
