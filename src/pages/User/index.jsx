import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { editUser } from '../../api/user';
import { sendSuccessMessage } from '../../store/reducers/user';

import Amount from "../../components/Amount";

import './style.css';

const Login = () => {
  const dispatch = useDispatch();

  const first = useSelector((state) => state.user.user.firstName);
  const last = useSelector((state) => state.user.user.lastName);
  const isLogged = useSelector((state) => state.user.isLogged);
  const successMessage = useSelector((state) => state.user.successMessage);

  const [isEditing, setIsEditing] = useState(false);
  const [newLastName, setNewLastName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");

  const openForm = () => {
    setIsEditing(!isEditing);
    dispatch(sendSuccessMessage(""));
  }

  const onSave = () => {
   
    if (newFirstName || newLastName) {
      const updatedFirstName = newFirstName || first; 
      const updatedLastName = newLastName || last; 
      dispatch(editUser(updatedFirstName, updatedLastName));
    }  else {
      setIsEditing(!isEditing);
      dispatch(sendSuccessMessage(""));
    }
  };

  if (!isLogged) {
    return <Navigate to="/" />
  }

  return (
    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back</h1>
      { isEditing ? (
        <form className="form-edit">
          <div className="edit__info">
            <input type="text"  name="firstname" placeholder={first} onChange={event => (setNewFirstName(event.target.value))}/>
            <input type="text"  name="lastname" placeholder={last} onChange={event => (setNewLastName(event.target.value))}/>
           </div>

           {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
            )}

           <button className="edit-button" type="button" onClick={onSave}>Save</button>
           <button className="edit-button" onClick={openForm}>Cancel</button>
        </form>
      ) : ( 
      <div className="welcome-back">
        <h1>{first} {last}!</h1>
        <button className="edit-button" onClick={openForm}>Edit Name</button>
      </div>
      )}
    </div>
    <h2 className="sr-only">Accounts</h2>
    <Amount change={8349} amount="$2,082.79" description="Available Balance" />
    <Amount change={6712} amount="$10,928.42" description="Available Balance" />
    <Amount change={8349} amount="$184.30" description="Current Balance" />
  </main>
  );
};

export default Login;