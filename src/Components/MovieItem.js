import React from 'react';

let Card=({data})=>{
    console.log(data)
    return (
    <div>
        <div className="card" style={{width:"350px",color:"#000",fontSize:"18px"}}>
  <img className="img" src={data.backdrop} alt="image"/>
  <div className="card-body">
    <h5 className="title">{data.title}</h5>
    <p className="description-text" title={data.overview}>{data.overview}</p>
    <ul className="text-left list">
    <li className="list-item"><b>Director:</b> {data.director}</li>
    <li className="list-item"><b>IMDB Rating:</b> {data.imdb_rating}</li>
    <li className="list-item"><b>Release Date:</b>{data.released_on}</li>
    <li className="list-item"><b>Genres:</b>{data.genres.map(genre=>genre).join(',')}</li>
  </ul>
  </div>
</div>
    </div>
    )
}

export default Card;
