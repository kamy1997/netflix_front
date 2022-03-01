import React from 'react'
import styles from './plan.module.scss';
const Index = () => {
    return (
        <div className={styles.First__Container}>
            <div className={styles.Second__Container}>
            
            <h1>Regardez autant que vous voulez. Sans publicité.</h1>
            </div>
            <div className={styles.Third__Container}>
            <ul>
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Recommandations personnalisées.</span>
           </li> 
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Changez ou annulez votre forfait à tout moment.</span>
           </li> 
           <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="#e50914"></path></svg>
           <span>Accès illimité sur tous vos appareils.</span>
           </li> 
            </ul>
            </div>
            <div className={styles.plan__Container}>
                <div className={styles.planGrid__header}>
                   
                   <label>
                       <input type="radio" name="plan" />
                       <span className={styles.plan}>Standard</span>
                   </label>
                   <label>
                       <input type="radio" name="plan" />
                       <span className={styles.plan}>Premium</span>
                   </label>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
            <div className={styles.Table}>
               <table>
                   <tbody>
                       <tr>
                           <td className={styles.First__Child}>Abonnement mensuel</td>
                           
                           <td className={styles.Second__Child}>30 €</td>
                           <td className={styles.Second__Child}>60 €</td>
                       </tr>
                       <tr>
                           <td className={styles.First__Child}>Qualité vidéo</td>
                          
                           <td className={styles.Second__Child}>Meilleure</td>
                           <td className={styles.Second__Child}>Optimale</td>
                       </tr>
                       <tr className={styles.Last__Explain}>
                           <td className={styles.First__Child}>Résolution</td>
                           <td className={styles.Second__Child}>480p</td>
                           <td className={styles.Second__Child}>1080p</td>
                           <td className={styles.Second__Child}>4K+HDR</td>
                       </tr>
                   </tbody>
               </table>
            </div>
            <div className={styles.ButtonContainer}>
            <button>subscribe</button>
            </div>
        </div>
    )}
export default Index;