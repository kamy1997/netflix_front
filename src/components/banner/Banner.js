import React from 'react';
import styles from "./banner.module.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Banner() {
    
    const bannerStyle={
      backgroundImage:`url("https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXlt7Skny36UA9hDgsK0f_vScFeMVe1nCvHp9HhqiI5iIkK2BqUahsgOb7OQshh5JUFjPGRU3iHd8hIgBDtbZKvnxXs7.jpg?r=601")`,
       
        backgroundSize: "Cover",
        backgroundPosition: "center center",
    };
  return <headear className={styles.banner}  style={bannerStyle}>
       
      <div className={styles.banner__content}>
          <h1 className={styles.banner__title}> Alice In Borderland</h1>
           <span className={styles.desc}>
           Arisu, un obsédé de jeux vidéos, se retrouve soudainement dans une étrange version de Tokyo, où la ville est complètement vide, et dans laquelle lui et ses amis doivent participer à des jeux dangereux pour survivre.
        </span>
          
          <div className={styles.banner__buttons}>
              <button className={styles.banner__button} stylesbanner__button--play> <PlayArrowIcon /> Lecture</button>
              <button className={styles.banner__button}> <HelpOutlineIcon/>Plus d'infos</button>
          </div>
      </div>
  </headear>;
}

export default Banner;
