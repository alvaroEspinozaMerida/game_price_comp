import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import cached_data from "../../assets/testData3.json"

function SearchResults() {

    const [data, setData] = useState([]);

    const { state } = useLocation();
    const query = state?.query || '';
    const regex = new RegExp(`^${query}`, 'i');
    const results = data.filter(game => regex.test(game.title));

    useEffect(() => {
        setData(cached_data.games)
    }, []);



    return (
        <div>

            <div>
                <h2>Results for "{query}"</h2>
                {results.length > 0 ? (
                    <ul>
                        {results.map((game, index) => (
                            <li key={index}>{game.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No games found</p>
                )}
            </div>


        </div>
    );
}

export default SearchResults;