
import React from "react";
import '../style/index.css'

 const Card = (props) =>{
    return(
        <div className="card">
            <img src={`https://robohash.org/`+props.monster.id} />
            <h5>{props.monster.name}</h5>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;