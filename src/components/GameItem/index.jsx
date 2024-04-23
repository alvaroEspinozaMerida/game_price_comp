import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./GameItem.module.scss"
import testImg2 from "../../assets/half.png";
function GameItem(props) {
    return (
        <div className={styles.item_container}>


            <h2 class="title is-5">{props.item.title}</h2>
            <Link to = {`/game_item/${props.item.steamAppID}`}>
            <img src={testImg2} alt="Image 2" />
            </Link>
            <div className={styles.item_container__prices}>

                {
                    props.item.deals.map(deal => <h3>{deal.storeID}: {deal.price}$</h3>)
                }
            </div>


        </div>
    );
}

export default GameItem;