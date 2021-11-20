import React, {useEffect} from 'react';

import s from './BookPage.module.scss';

import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Wrapper from "../../components/Wrapper/Wrapper";
import Loader from "../../components/Loader/Loader";


const BookPage = () => {
  debugger;
  const {bookInfo, isLoading} = useTypedSelector(state => state.bookReducer);
  const {fetchBookInfo} = useActions();
  const {bookID} = useParams();

  useEffect(() => {
    fetchBookInfo(bookID)
  }, [])

  const createMarkup = () => {
    return {__html: bookInfo?.volumeInfo.description!}
  }

  console.log("Инфа о книге", bookInfo)

  return (
    <div className={s.bookPage}>
      <Wrapper>
        {!isLoading ? <div className={s.bookPage__content}>
            <div className={s.bookInfo__about}>
              <div className={s.bookCover}>
                <img
                  className={s.bookCover__img}
                  src={bookInfo?.volumeInfo.imageLinks.thumbnail || 'https://via.placeholder.com/128x180'}
                  alt=""
                />
              </div>
              <div className={s.bookInfo__authors}>
                {bookInfo?.volumeInfo.authors && bookInfo.volumeInfo.authors.map((author) => (
                  <span className={s.bookInfo__authors__value}>{author}</span>
                ))}
              </div>
            </div>
            <div className={s.bookInfo}>
              <div className={s.bookInfo__categories}>
                {bookInfo?.volumeInfo.categories && bookInfo.volumeInfo.categories.map((category) => (
                  <span className={s.bookInfo__categories__value}>{category}</span>
                ))}
              </div>
              <div className={s.bookInfo__title}>
                <h2 className={s.bookInfo__title__value}>{bookInfo?.volumeInfo.title}</h2>
              </div>
              <div className={s.bookInfo__desc}>
                {bookInfo?.volumeInfo.title && <div dangerouslySetInnerHTML={createMarkup()}/>}
              </div>
            </div>
          </div>
          : <Loader/>}
      </Wrapper>
    </div>
  );
};

export default BookPage;
