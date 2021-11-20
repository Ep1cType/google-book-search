import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage/MainPage";
import BookPage from "./pages/BookPage/BookPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path="/:bookID" element={<BookPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
