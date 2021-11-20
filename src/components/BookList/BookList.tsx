import React from 'react';

import s from './BookList.module.scss';
import {IBook} from "../../types/BookTypes";
import BookCard from "./BookCard/BookCard";
import Loader from "../Loader/Loader";

interface BookListProps {
  bookList: IBook[];
  isLoading: boolean;
  isFetching: boolean;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
}

const BookList: React.FC<BookListProps> = ({bookList, isLoading, isFetching, setStart, totalCount}) => {
  return (
    <ul className={s.bookList}>
      {bookList
      &&
      bookList.map((item) => (
        <BookCard
          id={item.id}
          key={item.etag}
          title={item.volumeInfo.title}
          thumbnail={item.volumeInfo.imageLinks?.thumbnail}
          category={item.volumeInfo.categories}
          authors={item.volumeInfo.authors}
        />
      ))
      }
    </ul>
  );
};

export default BookList;
