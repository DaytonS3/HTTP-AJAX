import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';




export default class Form extends React.Component{
    constructor(){
        super();
        this.state={
           addFriend: {
              name: '',
              age: '',
              email: ''
           } 
        }
    }

    onchange = (e) => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    putMessage = (e) => {
        e.preventDefault();
      this.props.putM(1, this.state.addFriend)
    }
 

    
    render(){
        
      return(        
        <div className="form">
            <form>
                <input text="text" name="name"
                value={this.state.name}
                placeholder="Name" 
                onChange={this.onchange}
                />
                <input text="text" name="age"
                value={this.state.age}
                placeholder="Age" 
                onChange={this.onchange}
                />
                <input text="text" name="email"
                value={this.state.email}
                placeholder="Email" 
                onChange={this.onchange}
                />
                <button className="Btn" onClick={this.putMessage}>Update</button>
                <Link to="/"><button className="Btn">Home</button></Link>
            </form>
            
        </div>
     
        )
        
    }

}


  