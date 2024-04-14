import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./HomeGameItem.module.scss"
import testImg2 from "../../assets/half.png";
function HomeGameItem(props) {
    return (
        <div className={styles.item_container}>


            <h2>{props.item.title}</h2>
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

export default HomeGameItem;