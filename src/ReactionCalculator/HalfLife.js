import styles from "./HalfLife.module.css";

function HalfLife(){


    return(
        <div className={styles.container}>
         <h1>please enter</h1>
         <div className={styles.inputs}>
            <div className={styles['label-input']}>
            <label>Order of reaction (units)</label>
            <input type="number"></input>
            </div>

            <div className={styles['label-input']}>
            <label>Initial concentration (units)</label>
            <input type="number"></input>
            </div>

            <div className={styles['label-input']}>
            <label>Rate constant (units)</label>
            <input type ="number"></input>
            </div>
           
            
            
         </div>
     </div>





    );
}
export default HalfLife ;