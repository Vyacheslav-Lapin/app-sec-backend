import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import UsersView from "../UsersView";
import Home from "../Home";

export default () => <main>
  <BrowserRouter>
    <NavLink to="/">Home</NavLink>
    {/*<NavLink to="/roster">Roster</NavLink>*/}
    {/*<NavLink to="/schedule">Schedule</NavLink>*/}
    <NavLink to="/users">Users</NavLink>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/*<Route path='/roster' element={<Roster/>}/>*/}
      {/*<Route path='/schedule' element={<Schedule/>}/>*/}
      <Route path='/users' element={<UsersView/>}/>
    </Routes>
  </BrowserRouter>
</main>;
