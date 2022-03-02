import React, { useState } from "react";
import Headermenu from "../../components/header/HeaderMenu/HeaderMenu";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

import style from "./browse.module.scss";




export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3131/api/v1/products/getProduct');
  const data  = await res.json();
  return{
    props: {films : data }
  }
}

function BrowsePage({films}) {
 
 
  return ( 
    
  <>
 

 <Headermenu/>
 <Banner />
  
  <div className={style.contain}>


 
  
      <div className={style.row__inner}>
    <div className={style.slides}>
      
      {films.map( (film) => {
        return (
         
        <div key={film?._id}  className={style.tile}>
          
         <div className={style.tilemedia}>
           
            <img className={style.tileimg} src={film?.img}  alt="" 
             />
            
          </div>
          <div className={style.tiledetails}>
            <div className={style.tile__title}>
            {film?.title}
           
            

            <div className={style.icons}>
              <PlayArrow className={style.icon} />
              <Add className={style.icon} />
              <ThumbUpAltOutlined className={style.icon} />
              <ThumbDownOutlined className={style.icon} />
            </div>
            </div>
          </div>
        </div> 
       
        );
   } )  } 
 
    </div>
  </div>
</div>

<footer className={style.footer}> 
  <Footer />
  
</footer>

  </>
  
);
   
}

export default BrowsePage;