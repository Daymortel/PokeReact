import React from "react"
import { Link } from "react-router-dom";

export const Pokemon = ({ pokemon }) => {
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        fetch(pokemon.url)
        .then(res => res.json())
        .then(p => setData(p))
        .catch(e => console.log(e))
    });

    return (
        <>
            <Link to={`/${data.id}`}><img src={data.sprites?.front_default}/></Link>
        </>
    )
}