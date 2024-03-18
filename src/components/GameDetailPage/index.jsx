import styles from "./GameDetailPage.module.scss"
import React, {useEffect, useState} from 'react';
import testImg2 from "../../assets/halo2.png";
import testImg from "../../assets/halo.png";
import testImg3 from "../../assets/halo3.png";
import testImg4 from "../../assets/halo4.png";

import gameTestData from "../../assets/testData.json";

function GameDetailPage(props) {
    // find the specific game inside of the json data using the GAMEID variable


    const [content, setContent] = useState(null);

    useEffect(() => {
        setContent(gameTestData.games.find(game => game.gameID === 12345))
    }, []);

    // If game not found display to user game not found
    if (!content) {
        // Data has not loaded yet, return loading state or null
        return <div>Loading...</div>;
    }


    return (
        <div className={styles.main_container}>

            <h1>HAL0 2</h1>

            <div className={styles.main_container__images} >
                <img src={testImg2} alt="Image 2" />
                <img src={testImg} alt="Image 2" />
                <img src={testImg3} alt="Image 2" />
                <img src={testImg4} alt="Image 2" />
            </div>

            <div className={styles.main_container__prices} >

                <div className={styles.main_container__prices__headers}>
                    <h1>
                        Date:
                    </h1>

                    <h1>
                        Store Name:
                    </h1>
                    <h1>
                        Store Price:
                    </h1>
                    <h1>
                        Store Savings:
                    </h1>


                </div>


                <div className={styles.main_container__prices__history}>

                    {

                        content.price_history.map((entry, index) => (
                            <div key = {index} className={styles.main_container__prices__history__stores}>
                                <h1>{entry.date}</h1>

                                <div className={styles.main_container__prices__history__stores__prices}>

                                    {
                                        Object.entries(entry.prices).map(([platform, price]) => (
                                            <h3 >
                                                {platform}: {price}
                                            </h3>
                                        ))
                                    }

                                </div>

                            </div>
                        ))
                    }


                </div>

            </div>

        </div>
    );
}

export default GameDetailPage;