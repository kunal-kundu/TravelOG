import React from "react"

export default function Destination(props){
    
    return (
        <div className="main--div">
             <img src={props.imageUrl} className="main--img" />
             <div className="secondary">
             <div className="location--fix"> 
                  <img src="./location.png" className="gps"/>  
                  <p className="country">{props.location}</p>
                  <a herf={props.googleMapsUrl}> View on Google Maps</a>
             </div>
             <h1>{props.title}</h1>
             <p className="date">{props.startDate} - {props.endDate}</p>
             <p>{props.description}</p>
             </div>
             <hr />
        </div>
    )
}