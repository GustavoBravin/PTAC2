import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home/Home';
import ToDo from './ToDo/ToDo';
import Ativ from './ToDo/atividade';
import Detalhe from './ToDo/detalhe';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/atividade' element={<Ativ />}></Route>
        <Route path='/todo' element={<ToDo />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detalhe/:id' element={<Detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)