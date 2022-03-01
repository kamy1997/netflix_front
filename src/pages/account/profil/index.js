import React, { useEffect, useState } from "react";
import TitlePage from "../../../components/UI/Title/TitlePage";
import authService from "../../../services/auth.service";
import Input from "../../../components/UI/Input/Input";
import styles from "./index.module.scss";
import Message from "../../../components/UI/Message/Message";
import withAuth from "../../../HOC/withAuth";
const Index = () => {
  const [user, setUser] = useState({});
    const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    authService
      .updateUser(token, user)
        .then((data) => {
            console.log(data);
            setSuccess(true);
            setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.profile}>
       
     
   
    <div className={styles.profile__body}>
      <h1>Edit profile</h1>
      <div className={styles.profile__info}>
        <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt=''
        />
        <div className={styles.profile__details}>
          <h2>kamykechir@gmail.com</h2>
          <div className={styles.profile__plan}>
            <h3>Plans
            

            </h3>
           
                
            <button className={styles.profile__signOut}>SignOut</button>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default withAuth(Index);
