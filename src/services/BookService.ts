import {AxiosResponse} from "axios";
import instance from "../api";
import {BookListResponse, IBook} from "../types/BookTypes";

export default class BookService {
  static async getBookList(searchValue: string, startIndex: number, category: string, sortValue: string): Promise<AxiosResponse<BookListResponse>> {
    return instance.get(`/volumes?maxResults=30&q=${searchValue}+subject:${category}&startIndex=${startIndex}&orderBy=${sortValue}`)
  }
  static async getBookInfo(bookID: string | undefined): Promise<AxiosResponse<IBook>> {
    return instance.get(`/volumes/${bookID}`)
  }
}
