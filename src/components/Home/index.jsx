import styles from "./Home.module.scss"
import {useEffect, useState} from "react";
// import testData from "../../../src/assets/content/test_data.json";

import cached_data from "../../assets/testData3.json"

import SearchBar from "../SearchBar/index.jsx";
import GameCarousel from "../GameCarousel/index.jsx";
import GameItem from "../GameItem/index.jsx";


const Home = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(cached_data.games)
    }, []);


    return (
        <>
            <div className={styles.main_container}>
                <SearchBar/>
                <div className={styles.main_container__carousel}>
                    <GameCarousel/>
                </div>

                <div className={"container "+styles.main_container__top_gallery}>
                    <h1 className="title is-1">TOP SELLERS</h1>
                    <div className={styles.main_container__top_gallery__items}>

                        {
                            content.map(item => <GameItem item = {item}/>)
                        }

                    </div>
                </div >
            </div>
        </>
    );
}

export default Home