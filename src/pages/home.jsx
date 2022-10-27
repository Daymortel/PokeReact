import React from 'react';
import { Pokemon } from '../components/pokemon';

import '../styles/style.css'

export const Home = ({ count }) => {

    const [pokemons, setPokemons] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(err => console.log(err))
    }, [count]);

    React.useEffect(() => {
        const results = pokemons.filter(p =>
            p.name.toLowerCase().includes(searchTerm)
        );
        setSearchResult(results)
    }, [searchTerm]);

    return (
        <>
            <nav>
            <h1>Pokedex</h1>
            <form action="">
                <input type="text" placeholder='Rechercher' value={searchTerm} onChange={handleChange} />
                {/* <button type="submit"><i className="bi bi-search"></i></button> */}
            </form>
            </nav>
            {searchResult.map((p, index) => <Pokemon key={index} pokemon={p} url={p.url} />)}
        </>
    )
}
