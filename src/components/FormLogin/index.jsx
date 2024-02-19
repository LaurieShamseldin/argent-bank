import { useDispatch, useSelector } from 'react-redux';
import { changeEmailAndPassword } from '../../store/reducers/user';
import { login } from '../../api/user';

import './style.css';

const FormLogin = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeEmailAndPassword({ key: name, value: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="email" value={email}  onChange={handleInputChange} />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"  onChange={handleInputChange} value={password}/>
      </div>

      <div className="input-remember">
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
      </div>

      <button type="submit" className="sign-in-button">Sign In</button> 

      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
    </form>

  );
};



export default FormLogin