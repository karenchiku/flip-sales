import styles from '../styles/index.module.css'


export default function Navbar() {
    const today = new Date().toDateString().slice(0, 10);
    return (

        <div className={styles.navbarcontainer}>
            <div className={styles.textcontrainer}>
                <h1>BestDeals Website</h1>
                <p>{today}</p>
            </div>
        </div>

    )
}