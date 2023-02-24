import React from 'react';



const Cards = ({ country }) => {

    return (
        <li className='cards'>
            <a href={'/Country/' + country.translations.fra.common}>
                <img src={country.flags.svg} alt={"drapeau " + country.translations.fra.common} />
            </a>

            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>Pop.{country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Cards;