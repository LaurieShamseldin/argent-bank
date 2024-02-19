import Logo from '../../assets/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/reducers/user';

import 'font-awesome/css/font-awesome.min.css';
import './style.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const first = useSelector((state) => state.user.user.firstName);

  const signout = () => {
    dispatch(logout());
  }

  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      {
        isLogged ? (
          <div className="header__link">
            <NavLink className="main-nav-item" to="/profil">
              <i className="fa fa-user-circle"> &nbsp; </i> 
              { first }
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={signout}>
              <i className="fa fa-sign-out"> </i> 
              &nbsp;Sign Out
            </NavLink>
          </div>
        ) : (
          <div className="header__link">
            <NavLink className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"> </i> 
              &nbsp;Sign In
            </NavLink>
          </div>
        )
      }

      </nav>
    </header>
  );
};

export default Header;