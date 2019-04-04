import React from 'react';
import '../App.css'

export default function FriendsList(props){
    console.log(props)
    return(        
        <div className="card">
            <h1>{props.name}</h1>
            <p><strong>Age: </strong>{props.age}</p>
            <p><strong>Email: </strong>{props.email}</p>
        </div>
     
    )
}