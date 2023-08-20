import Head from 'next/head';
import Card from '../components/card';
import styles from '../styles/index.module.css';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';


export default function Home() {
  const [deals, setDeals] = useState([]);


  const getBestDeal = async () => {
    setDeals([]);
    try {
      const response = await fetch('http://localhost:3001/api/deals', {
        method: 'GET'
      })
      const data = await response.json();
      setDeals(data);

    } catch (err) {
      console.log(err)
    }

  }

  const getnewDeals = async () => {
    setDeals([]);
    try {
      const response = await fetch('http://localhost:3001/api/newdeals', {
        method: 'GET'
      })
      const data = await response.json();
      setDeals(data);

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBestDeal();
  }, [])


  return (
    <Layout>
      <div className={styles.ecommercebutton}>
          <button className={styles.primary} onClick={getBestDeal}>Amazon</button>
          <button className={styles.primary} >eBay</button>
          <button className={styles.primary} disabled>Etsy</button>
      </div>

      <div className={styles.deals}>
        <h2>BestDeals</h2>
        <div className={styles.cards}>
          {deals.map(deal =>
            <Card key={deal.pos} item={deal} />
          )}
        </div>


      </div>



    </Layout>
  )
}
