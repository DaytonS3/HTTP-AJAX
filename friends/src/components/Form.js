import React from 'react';
import '../App.css'





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

    postMessage = (e) => {
        e.preventDefault();
      this.props.postM(this.state.addFriend);

      this.setState({
          addFriend: {
            name: '',
            age: '',
            email: ''
          }
      })
    }
 

    
    render(){
        
      return(        
        <div className="form">
            <form onSubmit={this.postMessage}>
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
                <button type="submit">Add Friend</button>
            </form>
            
        </div>
     
        )
        
    }

}


    
   
