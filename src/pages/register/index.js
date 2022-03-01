import React, { useState } from "react";
import { useRouter } from "next/router";
import authService from "../../services/auth.service";

import Message from "../../components/UI/Message/Message";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return false;
        }
        localStorage.setItem("token", data.token);
        router.push("/plan");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message)
      });
  };

  return (
    <div className={styles.register}>
      <div className={styles.top}>
        <div className={styles.wrapper}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link href="/login" > 
          <button className={styles.loginButton}>Sign In</button>
          </Link>
         
        </div>
      </div>
   
    <div className={styles.container}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      
      
      <form  onSubmit={(e) => handleSubmit(e)}>
      <Input
          type="text"
          label="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        
        <Input
          type="text"
          label="username"
          id="userName"
          name="userName"
          placeholder="username"
          required={true}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
       
        <Input
          type="password"
          label="Mot de passe"
          id="password"
          name="password"
          placeholder="Mon mot de passe"
          required={true}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <input className={styles.loginButton} type="submit" value="start" />
        {
          error ? (
            <Message message={errorMessage} type="error"/>
          )
          :
          ""  
        }
      </form>
    </div>
    </div>
  );
};

export default Index;