import React from 'react';

const AnimeCard = ({series}) =>{
    return(
        <>
        <div className="anime">
            <div>
                <p> {series.status}</p>
            </div>
            <div>
                <img src={series.poster} alt={series.title}/>
            </div>
            <div>
                <span>{series.type}</span>
                <h3>{series.title}</h3>
            </div>
        </div>
        </>
    )
}


export default AnimeCard;