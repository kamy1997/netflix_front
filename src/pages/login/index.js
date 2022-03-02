import React, {useEffect, useState} from 'react';
import Message from '../../components/UI/Message/Message'
import Input from "../../components/UI/Input/Input";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const Index = () => {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            console.log(data);
            if (data.message) {
              return false;
            }
            localStorage.setItem("token", data.token);
            router.push("/homepage");
          })
          .catch((err) => {
            console.log(err);
            setError(true);
            setErrorMessage(err.message);
          });
    }
    return (
        <div className={styles.login}>
        <div className={styles.top}>
          <div className={styles.wrapper}>
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.container}>
        
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In</h1>
                <Input 
                type="email"
                label="email"
                id="email"
                name="email"
                placeholder="email"
                onChange={(e) => {
                    setUser({...user, email:e.target.value})
                }}
                />
                <Input 
                type="password"
                label="password"
                id="password"
                name="password"
                placeholder="password"
                onChange={(e) => {
                    setUser({...user, password:e.target.value})
                }}
                />
                <input className= "button" value="Se Connecter" type="submit"/>
                {
                  error ? (
                    <Message message={errorMessage} type="error"/>
                )
                : 
                ""  
                }
                
                <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not a
            bot. <b>Learn more</b>.
          </small>
                
            </form>
        </div>
        </div>
    );
            }

export default Index;
