import React from 'react';

import s from './PageHeader.module.scss';

import background from "../../assets/images/headerBackground.jpg";
import Wrapper from "../Wrapper/Wrapper";

const PageHeader: React.FC = () => {
  return (
    <header className={s.pageHeader} style={{backgroundImage: `url(${background})`}}>
      <Wrapper>
        <h1 className={s.logo}>The World of books</h1>
      </Wrapper>
    </header>
  );
};

export default PageHeader;
