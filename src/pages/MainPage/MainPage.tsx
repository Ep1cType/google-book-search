import React, {useEffect, useState} from 'react';

import s from './MainPage.module.scss';

import Filtering from "../../components/Filtering/Filtering";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import BookList from "../../components/BookList/BookList";
import Wrapper from "../../components/Wrapper/Wrapper";
import Loader from "../../components/Loader/Loader";

const MainPage: React.FC = () => {
  const {fetchBookList, fetchAdditionalBooks} = useActions()
  const {bookList, isLoading, isError, isFetching, totalCount} = useTypedSelector(state => state.bookReducer);

  const [searchValue, setSearchValue] = useState<string>('');
  const [categoriesValue, setCategoriesValue] = useState<string>("");
  const [sortValue, setSortValue] = useState<string>('relevance ');

  const [start, setStart] = useState<number>(0);

  console.log("Список книжек", bookList)

  useEffect(() => {
    if (start) {
      fetchAdditionalBooks(searchValue, start, categoriesValue, sortValue)
    }
  }, [start])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchBookList(searchValue, 0, categoriesValue, sortValue)
  }


  return (
    <div className={s.mainPage}>
      <Filtering
        handleSubmit={handleSubmit}
        categoriesValue={categoriesValue}
        searchValue={searchValue}
        setCategoriesValue={setCategoriesValue}
        setSearchValue={setSearchValue}
        setSortValue={setSortValue}
        sortValue={sortValue}
      />
      <div className={s.error}>
        {isError && <span>{isError}</span>}
      </div>
      <div className={s.foundCounter}>
        {totalCount > 0 && <span>Found {totalCount} books</span>}
      </div>
      <section className={s.mainSection}>
        {isLoading
          ?
          <Loader/>
          :
          <Wrapper>
            <BookList
              totalCount={totalCount}
              setStart={setStart}
              isFetching={isFetching}
              isLoading={isLoading}
              bookList={bookList}/>
          </Wrapper>
        }
      </section>
      <footer className={s.footer}>
        <Wrapper>
          {bookList.length !== totalCount
          &&
          <button
            className={s.footer__button}
            disabled={isFetching}
            onClick={() => setStart(prevState => prevState + 30)}
          >Load More
          </button>}
        </Wrapper>
      </footer>
    </div>
  );
};

export default MainPage;
