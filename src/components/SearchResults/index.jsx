import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import cached_data from "../../assets/testData3.json"
import GameItem from "../GameItem/index.jsx";
import styles from "../Home/Home.module.scss";

function SearchResults() {

    useEffect(() => {
        setData(cached_data.games)
    }, []);


    const [data, setData] = useState([]);

    const { state } = useLocation();
    const query = state?.query || '';
    const regex = new RegExp(`^${query}`, 'i');
    const results = data.filter(game => regex.test(game.title));




    return (
        <div>

            <div>
                <h2>Results for {query}</h2>
                {/*PLEASE UPDATE THIS className; i just used this name to get it align */}
                <div className={styles.main_container__top_gallery__items}>

                {results.length > 0 ? (
                        results.map((item, index) => (
                            // <li key={index}>{game.title}</li>
                             <GameItem item = {item}/>
                        ))

                ) : (
                    <p>No games found</p>
                )}
                </div>

            </div>


        </div>
    );
}

export default SearchResults;