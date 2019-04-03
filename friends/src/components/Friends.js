import React from 'react';
import '../App.css'
import axios from 'axios';
import FriendsList from './friendsList';

export default class Friends extends React.Component{
    constructor(){
        super();
        this.state={
            datas: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then(res => {
                this.setState({datas: res.data});
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    
    render(){
        
        return(
            <div>
                {this.state.datas.map(item => (
                <FriendsList key={item.id} name={item.name} 
                age={item.age} email={item.email}
                />
                
                ))}
            </div>
        )
    }

}

