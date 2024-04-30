import styles from "./GameDetailPage.module.scss"
import React, {useEffect, useState} from 'react';
import testImg2 from "../../assets/halo2.png";
import testImg from "../../assets/halo.png";
import testImg3 from "../../assets/halo3.png";
import testImg4 from "../../assets/halo4.png";
import SearchBar from '../SearchBar';
import { Container, Title, Image, Columns, Column, Box } from "react-bulma-components";

import gameTestData from "../../assets/testData3.json";

import gameTestData2 from "../../assets/testData2.json"
import {useParams} from "react-router-dom";

function GameItemPage(props) {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();
    console.log(params['steamAppID'])

    // find the specific game inside of the json data using the GAMEID variable
    // LEAVE THIS FOR LATE
    // const [content, setContent] = useState(null);
    //
    // useEffect(() => {
    //     setContent(gameTestData.games.find(game => game.gameID === 12345))
    // }, []);

    // If game not found display to user game not found

    // const [content, setContent] = useState(gameTestData);


    // THIS CODE WILL BE UPDATED TO MAKE CALLS TO BACKEND API
    // USED FOR TESTING FROM ONLY FRONT END
    // console.log(content)
    //
    // const { steamAppID } = useParams();
    // console.log(steamAppID)
    // const item = content.games.find(item => item.steamAppID === steamAppID);
    // BACKEND API CALL
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/games/find_game_by_id?id=${params['steamAppID']}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setItem(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!item) {
        // Data has not loaded yet, return loading state or null
        return <div>Loading...</div>;
    }
    return (
        <div className={"container "+styles.main_container}>
            <SearchBar />
            <h1 className="title is-1">{item.title}</h1>
            {/*Image links will need to be added manually in database*/}
            <div className={styles.main_container__images} >
                <img src={item.screenshots[0]} alt="Image 2" />
                <img src={item.screenshots[1]} alt="Image 2" />
                <img src={item.screenshots[2]} alt="Image 2" />
                <img src={item.screenshots[3]} alt="Image 2" />
            </div>
            <div className={styles.main_container__prices} >
                <div className={styles.main_container__prices__headers}>
                </div>
                <div className={styles.main_container__prices__history}>

                    {
                        item.deals.map((deal, index) => (
                            <div  className={styles.main_container__prices__history__stores} key={deal.dealID}>
                                <div>Store ID: {deal.storeName}</div>
                                {/*<div>Date: {deal.date.join('-')}</div>*/}
                                <div>Price: ${deal.price}</div>
                                <div>Retail Price: ${deal.retailPrice}</div>
                                <div>Savings: {deal.savings.toFixed(2)}%</div>
                            </div>
                        ))}

                </div>

            </div>

        </div>
    );
}

export default GameItemPage;