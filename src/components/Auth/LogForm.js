import { useState,useRef,useContext } from 'react';
import AuthContext from '../../store/auth-context';


import classes from './AuthForm.module.css';

const LogForm = () => {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();

 const authCtx= useContext(AuthContext);

  const [isLog, setIsLog] = useState(true);
  const [isLoad,setIsLoad]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLog((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();

    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    
    setIsLoad(true);
     let url;
    if(isLog){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyAV72UVS1N9apaRS8c5TTv7llvie3nDL0s';
    }
    else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyAV72UVS1N9apaRS8c5TTv7llvie3nDL0s';
    }
      fetch(url, {
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:true
        }),
        header:{
          'Content-Type':'application/json'
        }
      }
      ).then(res=>{
        setIsLoad(false);
        if(res.ok){
          return res.json();
        }else{
          return res.json().then(data=>{
            let errorMessage='Authentication Failed';
            // if(data && data.error.message){
            //   errorMessage=data.error.message;
            // }
            
            throw new Error(errorMessage);
          });
        }
      }).then (data=>{
        authCtx.login(data.idToken);
      })
      .catch(err =>{
        alert(err.message);
      });
      
    }

  

  return (
    <section className={classes.auth}>
      <h1>{isLog ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoad && <button>{isLog ? 'Login' : 'Create Account'}</button>}
          {isLoad && <p>Sending request</p>}         
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {/* {isLogin ? 'Create new account' : 'Login with existing account'} */}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LogForm;
