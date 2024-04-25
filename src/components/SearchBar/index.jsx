import {useEffect, useState} from 'react';
import styles from "./SearchBar.module.scss"

import cached_data from "../../assets/testData3.json"

import { Link, useNavigate } from 'react-router-dom';




function SearchBar({ onSearch }) {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const navigate = useNavigate();



    useEffect(() => {
        setData(cached_data.games)
    }, []);



    const onChangeHandler = (input) => {
        setQuery(input);
        if (input.length > 0) {
            const regex = new RegExp(`^${input}`, 'i');
            setSuggestions(data.filter(game => regex.test(game.title)));
        } else {
            setSuggestions([]);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/results',{ state: { query: query } })
    };




    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div className={styles.searchBox}>
                    <input
                        className={styles.searchInput}
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={e => onChangeHandler(e.target.value)}
                    />
                    <button type="submit" className={styles.searchButton}>Search</button>
                </div>
                {suggestions.length > 0 && (
                    <ul className={styles.suggestions}>
                        {suggestions.map((item, index) => (
                            <li key={index} onClick={() => setQuery(item.title)}>
                                <Link to={`/game_item/${item.steamAppID}`} className={styles.suggestionLink}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );

}

export default SearchBar;
