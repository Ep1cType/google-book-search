import React, {useEffect} from 'react';

import s from './BookPage.module.scss';

import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const BookPage = () => {
  debugger;
  const {bookInfo} = useTypedSelector(state => state.bookReducer);
  const {fetchBookInfo} = useActions();
  const {bookID} = useParams();

  useEffect(() => {
    fetchBookInfo(bookID)
  }, [])

  const createMarkup = () => {
    return {__html: bookInfo?.volumeInfo.description!}
  }

  console.log("Инфа о книге",bookInfo)

  return (
    <div className={s.bookPage}>
      <div className={s.bookCover}>
        <img className={s.bookCover__img} src={bookInfo?.volumeInfo.imageLinks ? bookInfo?.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x180'} alt="" />
      </div>
      <div className={s.bookInfo}>
        {bookInfo && <div dangerouslySetInnerHTML={createMarkup()} />}
      </div>


    </div>
  );
};

export default BookPage;
