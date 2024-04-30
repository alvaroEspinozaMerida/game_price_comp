import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./GameItem.module.scss"
import testImg2 from "../../assets/half.png";

function GameItem(props) {
    return (
        <div className="container">
            <div className={styles.item_container}>
                <h2 className="title is-5 has-text-centered">{props.item.title}</h2>
                <div className="has-text-centered">
                    <Link to={`/game_item/${props.item.steamAppID}`}>
                        <img src={props.item.thumb} alt="Image 2" />
                    </Link>
                </div>
                <div className={styles.item_container__prices}>
                    {props.item.deals.map(deal => <h3 key={deal.storeID}>{deal.storeName}: {deal.price}$</h3>)}
                </div>
            </div>
        </div>
    );
}

export default GameItem;