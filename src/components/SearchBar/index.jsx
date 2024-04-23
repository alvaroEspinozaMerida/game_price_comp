import {useEffect, useState} from 'react';
import styles from "./SearchBar.module.scss"

import cached_data from "../../assets/testData3.json"

import { Link, useNavigate } from 'react-router-dom';
import testImg2 from "../../assets/half.png";




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
        event.preventDefault();  // Prevent default form submission behavior

        navigate('/results',{ state: { query: query } })
    };




    return (
        <div>
            <form onSubmit={handleSubmit}>

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
                <button type="submit">Search</button>

            </form>

        </div>


    );
}

export default SearchBar;
