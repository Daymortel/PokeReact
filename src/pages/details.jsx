import React from "react";
import { useParams } from "react-router-dom"
import '../styles/style.css'

export const Details = () => {
    let { pages } = useParams();
    const [data, setData] = React.useState({})
    
    const typeColors = {
        electric: "#ffc800",
        normal: "#939393",
        fire: "#c21d1d",
        water: "#1d43c2",
        ice: "#1da9c2",
        rock: "#3a3b3b",
        flying: "#b4b8b8",
        grass: "#054f09",
        psychic: "#ffc6d9",
        ghost: "#561d25",
        bug: "#a2faa3",
        poison: "#795663",
        ground: "#d2b074",
        dragon: "#da627d",
        steel: "#1d8a99",
        fighting: "#2f2f2f",
        defaut: "#2a1a1f"
    }

    // const card = document.querySelector('.card')
    // card.style.background = typeColors[data.types?.[0]]

    React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pages}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(e => console.log(e))
    }, []);

    const images = data.sprites
    const sprites = [images?.front_default, images?.back_default, images?.front_shiny, images?.back_shiny]

    return (
        <>
            <div className="details">
            <a className="return" href="/"><i className="bi bi-arrow-left"></i></a>
            <section style={{background: typeColors[data.types?.[0].type.name]}}>
            <h2>{data.id} : {data.name}</h2>
            {data.types?.map((p, index) => <p>Type {index+1} : {p.type.name}</p>)}
            <p>Taille : {data.height}</p>
            <p>Poid : {data.weight}</p>
            <div className="default">
                <img src={sprites[0]}/>
                <img src={sprites[1]}/>
            </div>
            <div className="shiny">
                <img src={sprites[2]}/>
                <img src={sprites[3]}/>
            </div>
            <div className="navigate">
            {pages == 1 ?
                <a className="other" href="/898"><i className="bi bi-arrow-left"></i></a>
                :
                <a className="other" href={pages - 1}><i className="bi bi-arrow-left"></i></a>
            }
            {pages == 898 ?
                <a className="other" href="/1"><i className="bi bi-arrow-right"></i></a>
                :
                <a className="other" href={parseInt(pages) + 1}><i className="bi bi-arrow-right"></i></a>
            }
            </div>
            </section>
            </div>
        </>
    )
}
