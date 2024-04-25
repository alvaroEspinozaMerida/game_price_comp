import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import SearchBar from '../SearchBar';
import GameItem from '../GameItem';
import styles from "../SearchResults/SearchResults.module.scss";

import cached_data from "../../assets/testData3.json";

function SearchResults() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const query = location.state?.query || '';
    useEffect(() => {
        setData(cached_data.games);
        setLoading(false);
    }, []);

    const regex = new RegExp(query, 'i');
    const results = data.filter(game => regex.test(game.title));

    return (
        <div className={styles.container}>
            <SearchBar onSearch={(newQuery) => {
                const regex = new RegExp(newQuery, 'i');
                const newResults = data.filter(game => regex.test(game.title));
                setData(newResults);
            }} />
            <h2>Results for "{query}"</h2>
            {loading ? (
                <p>Loading results...</p>
            ) : results.length > 0 ? (
                <div className={styles.main_container__top_gallery}>
                    <div className={styles.main_container__top_gallery__items}>
                        {results.map((game, index) => (
                            <GameItem key={index} item={game} />
                        ))}
                    </div>
                </div>
            ) : (
                <p>No games found</p>
            )}
        </div>
    );
}

export default SearchResults;