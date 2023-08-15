import style from '../styles/index.module.css'
import Link from 'next/link'
export default function Card( {item} ){
    console.log(item);
    const titleFormatted = item.title.slice(0,20);
    const percentageDrop = Math.floor((item.price_strikethrough - item.price) / item.price_strikethrough * 100 )
    return (

            <div className={style.card}>
                <div className={style.imagecontainer}>
                    <img src={item.url_image} alt={item.title}/>
                </div>
                <div className={style.textcontainer}>
                    <h5>{titleFormatted}</h5>
                    <p>Rating : {item.rating}</p>
                    <p>Drop from ${item.price_strikethrough} to ${item.price}</p>
                </div>
                <div className={style.infocontanier}>
                    <p className={style.drop}>{percentageDrop}%</p>
                    <Link  href={`https://www.amazon.com${item.url}&tag="maizie04-20"`}>
                    <div className={style.golinkcontainer}>
                    go
                    </div></Link>
                </div>
                
            </div>
        )
}

