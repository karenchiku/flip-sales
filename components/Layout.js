import Head from 'next/head'
import styles from '../styles/index.module.css'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Flipsales</title>
            </Head>

            <div className={styles.layoutcontainer}>
                <Navbar />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}