import React from 'react';

import s from './Wrapper.module.scss';


const Wrapper: React.FC = ({children}) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  );
};

export default Wrapper;
