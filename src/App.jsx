// == Import modules
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "./api/user";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';


// == Composant
const App = () => {

  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token != null) {
      dispatch(getUser(token));
    }
  }, [token, dispatch]);

  const isLogged = useSelector((state) => state.user.isLogged);
  console.log(isLogged);

  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLogged ? (<Navigate replace to="/profil" />) : <SignIn />} />
        <Route path="/profil"  element={<User /> }  />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
