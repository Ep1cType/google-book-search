import React from 'react';

import s from './BookCard.module.scss';
import {useNavigate} from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  thumbnail: string | undefined;
  category: [string];
  authors: [string]
}

const BookCard: React.FC<BookCardProps> = ({id, title, thumbnail, category, authors}) => {
  const navigate = useNavigate();

  return (
    <li className={s.bookCard}>
      <div className={s.bookCard__thumbnail}>
        <img
          className={s.bookCard__thumbnail__img}
          src={thumbnail ? thumbnail : 'https://via.placeholder.com/128x180'}
          alt=""
          onClick={() => navigate(`${id}`)}
        />
      </div>
      <div>
        {category ? category[0] : <span>No category</span>}
      </div>
      <h2 className={s.bookCard__title}>{title}</h2>
      <div className={s.bookCard__authors}>
        {authors && authors.map((author, index) => (
          <span className={s.bookCard__author} key={index}>{author}</span>
        ))}
      </div>
    </li>
  );
};

export default BookCard;
