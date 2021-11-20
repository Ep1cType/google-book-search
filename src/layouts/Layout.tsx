import React, {useEffect} from 'react';

import s from './Layout.module.scss';
import {Outlet} from 'react-router-dom';
import PageHeader from "../components/PageHeader/PageHeader";
import {useActions} from "../hooks/useActions";
import Filtering from "../components/Filtering/Filtering";

const Layout = () => {

  return (
    <div className={s.layout}>
      <PageHeader />
      {/*<Filtering />*/}
      <Outlet />
    </div>
  );
};

export default Layout;
