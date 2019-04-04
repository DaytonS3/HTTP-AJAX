import React from 'react';
import '../App.css'
import axios from 'axios';
import FriendsList from './friendsList';
import Form from './Form';
import UpdateForm from './UpdateForm';
import {Route} from 'react-router-dom';

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
    
    postMessage = fri => {
        axios.post('http://localhost:5000/friends', fri)
        .then(res=> {
          console.log(res)
          
        })
        .catch(err=> {
          console.log(err)
        })
      }

      putMessage = (id, updatedFriend) => {
          axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
          .then(res=> console.log(res))
          .catch(err=> console.log(err))
      }

      deleteFriend = (id) => {

        axios.delete(`http://localhost:5000/friends/${id}`)
        .then(res=> {
            this.setState({ datas: res.data })
            console.log(res)
        })
        .catch(err=> console.log(err))
      }

      
    
    render(){
        
        return(
            <div>
                <h1>Friends List</h1>
                <Route path="/add" render={()=> <Form postM={this.postMessage} />}/>
                <Route path="/update" render={() => <UpdateForm putM={this.putMessage} />} />
                <div className="container">
                    {this.state.datas.map(item => (
                    <FriendsList key={item.id} name={item.name} id={item.id}
                    age={item.age} email={item.email} deleteFriend={this.deleteFriend}
                    /> 
                    
                    ))}
                </div>
                
            </div>
        )
    }

}

