
import React, { useState } from 'react';
import { Link ,useNavigate, useLocation} from 'react-router-dom';
import { auth } from '../../Utility/FireBase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { ClipLoader } from "react-spinners";
import classes from './signup.module.css';
import {DataContext} from '../../Components/DataProvider/DataProvider'
import { useContext } from 'react';
import { Type } from '../../Utility/action.type';

function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const[Loading, setLoading] = useState({
    signIn:false,
    signUp:false
  });
  const [{user}  , dispatch ] = useContext(DataContext)
  const navigate = useNavigate()
  const navStateData = useLocation()

  const authHandler = async (e) => {
    e.preventDefault();
  
    const action = e.nativeEvent.submitter.name;
  
    if (password.length < 6) {
      setErr('Password should be at least 6 characters.');
      return;
    }
  
    try {
      if (action === 'signin') {
           setLoading({...Loading, signIn:true})
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
      //   setLoading({...Loading, signIn:true})
        dispatch({
    type: Type.SET_USER,
    user: userInfo.user
  });
   setLoading({...Loading, signIn:false})
   navigate(navStateData?.state?.redirect || '/')
  
        console.log('Signed in:', userInfo);
        setErr('');
      } else {
           setLoading({...Loading, signUp:true})
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Account created:', userInfo);
           dispatch({
    type: Type.SET_USER,
    user: userInfo.user
  });
  setLoading({...Loading, signUp:false})
   navigate(navStateData?.state?.redirect || '/')
   
   setErr('');
   }
  

  } catch (error) {
  let errorMsg = '';

  switch (error.code) {
    case 'auth/email-already-in-use':
      errorMsg = 'This email is already registered. Try signing in instead.';
      break;
    case 'auth/invalid-email':
      errorMsg = 'Please enter a valid email address.';
      break;
    case 'auth/weak-password':
      errorMsg = 'Password should be at least 6 characters.';
      break;
    case 'auth/user-not-found':
      errorMsg = 'No account found with this email. Please sign up first.';
      break;
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      errorMsg = 'Incorrect password.';
      break;
    default:
      errorMsg = error.message;
  }

  setErr(errorMsg);
  console.error('Firebase Auth Error:', error.code, error.message);

  //: Reset correct loading state based on the action
  if (action === 'signin') {
    setLoading({ ...Loading, signIn: false });
  } else {
    setLoading({ ...Loading, signUp: false });
  }
}};

    return (
      <section className={classes.login}>
        <div>
          <Link to = {"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png"
              alt="amazon-logo"
            />
          </Link>
        </div>
        <div className={classes.signIn__container}>
          <h1>Sign In</h1>
          {navStateData?.state?.msg &&(
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {navStateData?.state?.msg}
            </small>
          )}
          <form onSubmit={authHandler}>
            <div>
              <label htmlFor="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" required />
            </div>
            {err && <p style={{ color: 'red' }}>{err}</p>}
            <button type="submit" name="signin" className={classes.logIn_signInbuttom}>
               {Loading.signIn? ( <ClipLoader color='grey' size = {15}/> ):(
              'Sign In'
            )}
                      </button>
            <button type="submit" name="signup" className={classes.login__registerbutton}>
              {Loading.signUp? ( <ClipLoader color='grey' size = {15}/> ):(
              'Create your Amazon Account '
            )}
            </button>
          </form>
          <p>By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        </div>
      </section>
    );
  }
  
  export default Auth;
  
  

 

 
