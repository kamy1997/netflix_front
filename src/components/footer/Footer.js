import React from 'react';
import styles from "./Footer.module.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (<footer className={styles.footer}>

        <div className={styles.container}>
            <div className={styles.footer__socials}>
                <a href="/" className={styles.footer__social}>
                    <FacebookIcon/>
                </a>
                <a href="/" className={styles.footer__social}>
                    < InstagramIcon/>
                </a>
                <a href="/" className={styles.footer__social}>
                    <TwitterIcon/>
                </a>
                <a href="/" className={styles.footer__social}>
                    < YouTubeIcon/>
                </a>
                </div>
            <ul className={styles.footer__links}>
                <li className={styles.footer__link}>
                    <a href="/" className={styles.footer__link}>
                       
                    FAQ
                    </a>

                </li>
                <li className={styles.footer__link}>
                    <a href="/" className={styles.footer__link}>
                    Relations Investisseurs
                    </a>

                </li>
                <li className={styles.footer__link}>
                    <a href="/" className={styles.footer__link}>
                    Modes de lecture
                    </a>
                    </li>
                <li className={styles.footer__link}>
                    <a href="/" className={styles.footer__link}>
                    Mentions légales
                    </a>
                    </li>
                <li className={styles.footer__link}>
                    <a href="/" className={styles.footer__link}>
                    Seulement sur Netflix
                    </a>
                    </li>
                <li className={styles.footer__link}>
                    <a href="/" className={styles.footer__link}>
                    Centre d'aide
                    </a>
                    </li>
               
               
                   
            </ul>
           
        </div>

    </footer>
    );
}

export default Footer;
