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
                <Link href="/" className={styles.footer__social}>
                    <FacebookIcon/>
                </Link>
                <Link href="/" className={styles.footer__social}>
                    < InstagramIcon/>
                </Link>
                <Link href="/" className={styles.footer__social}>
                    <TwitterIcon/>
                </Link>
                <Link href="/" className={styles.footer__social}>
                    < YouTubeIcon/>
                </Link>
                </div>
            <ul className={styles.footer__links}>
                <li className={styles.footer__link}>
                    <Link href="/" className={styles.footer__link}>
                       
                    FAQ
                    </Link>

                </li>
                <li className={styles.footer__link}>
                    <Link href="/" className={styles.footer__link}>
                    Relations Investisseurs
                    </Link>

                </li>
                <li className={styles.footer__link}>
                    <Link href="/" className={styles.footer__link}>
                    Modes de lecture
                    </Link>
                    </li>
                <li className={styles.footer__link}>
                    <Link href="/" className={styles.footer__link}>
                    Mentions légales
                    </Link>
                    </li>
                <li className={styles.footer__link}>
                    <Link href="/" className={styles.footer__link}>
                    Seulement sur Netflix
                    </Link>
                    </li>
                <li className={styles.footer__link}>
                    <Link href="/" className={styles.footer__link}>
                    Centre d&apos;aide
                    </Link>
                    </li>
               
               
                   
            </ul>
           
        </div>

    </footer>
    );
}

export default Footer;
