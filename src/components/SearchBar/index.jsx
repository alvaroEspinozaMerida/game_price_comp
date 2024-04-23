import {useEffect, useState} from 'react';
import styles from "./SearchBar.module.scss"

import cached_data from "../../assets/testData3.json"

import { Link } from 'react-router-dom';
import testImg2 from "../../assets/half.png";




function SearchBar({ onSearch }) {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);


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


    return (
        <div>
            <input type="text" value={query} onChange={e => onChangeHandler(e.target.value)} />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((item, index) => (
                        <li key={index} onClick={() => setQuery(item.title)}>
                            <Link to = {`/game_item/${item.steamAppID}`}>
                                {item.title}
                            </Link>

                        </li>
                    ))}
                </ul>
            )}
        </div>


    );
}

export default SearchBar;
