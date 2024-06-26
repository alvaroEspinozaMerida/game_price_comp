import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import SearchBar from '../SearchBar';
import GameItem from '../GameItem';
import styles from "../SearchResults/SearchResults.module.scss";

import cached_data from "../../assets/testData3.json";

function SearchResults() {
    useEffect(() => {
        setData(cached_data.games);
    }, []);

    const [data, setData] = useState([]);
    const { state } = useLocation();
    const query = state?.query || '';
    const regex = new RegExp(query, 'i');
    const results = data.filter(game => regex.test(game.title));

    return (
        <div className={styles.mainContainer}>
            <SearchBar />
            <h2 className="title is-4">Results for &quot;{query}&quot;</h2>
            <div className={styles.resultsContainer}>
                {results.length > 0 ? (
                    results.map((item, index) => (
                            <GameItem item={item} />
                    ))
                ) : (
                    <p className="has-text-centered">No games found</p>
                )}
            </div>
        </div>
    );
}

export default SearchResults;