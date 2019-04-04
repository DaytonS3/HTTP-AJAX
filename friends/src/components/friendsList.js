import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';

 const FriendsList =props => {
    
    const handleClick = e => {
        props.deleteFriend(props.id);
    }
    

    return(        
        <div className="card">
            <h1>{props.name}</h1>
            <p><strong>Age: </strong>{props.age}</p>
            <p><strong>Email: </strong>{props.email}</p>
            <button onClick={handleClick}>Delete</button>
            <Link to="/update"><button>Update</button></Link>
            <Link to="/add"><button>Add</button></Link>
        </div>
     
    )
}

export default FriendsList;