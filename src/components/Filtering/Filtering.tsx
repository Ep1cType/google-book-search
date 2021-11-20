import React from 'react';

import s from './Filtering.module.scss';

import Wrapper from "../Wrapper/Wrapper";

import searchIcon from '../../assets/icons/searchIcon.svg'

const categories = [
  {
    id: 2,
    value: "art"
  },
  {
    id: 3,
    value: "biography"
  },
  {
    id: 4,
    value: "computers"
  },
  {
    id: 5,
    value: "history"
  },
  {
    id: 6,
    value: "medical"
  },
  {
    id: 7,
    value: "poetry"
  }
]

interface FilteringProps {
  searchValue: string;
  categoriesValue: string;
  sortValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCategoriesValue: React.Dispatch<React.SetStateAction<string>>;
  setSortValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Filtering: React.FC<FilteringProps> = (
  {
    sortValue,
    setSortValue,
    searchValue,
    setSearchValue,
    categoriesValue,
    setCategoriesValue,
    handleSubmit
  }) => {
  return (
    <div className={s.filtering}>
      <Wrapper>
        <form className={s.filtering__form} onSubmit={(e) => handleSubmit(e)}>
          <div className={s.filtering__input}>
            <input
              className={s.filtering__input__search}
              value={searchValue}
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <input className={s.filtering__input__submit} type="submit" value=""/>
            <img style={{width: "20px", height: "20px", zIndex: "2", position: "relative", pointerEvents: "none"}} src={searchIcon} alt="search icon" />
          </div>
          <select
            className={s.filtering__input__categories}
            value={categoriesValue}
            onChange={(e) => setCategoriesValue(e.target.value)}
          >
            <option value="">all</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.value}>{cat.value}</option>
            ))}
          </select>
          <select
            className={s.filtering__input__sort}
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </form>
      </Wrapper>
    </div>
  );
};

export default Filtering;
