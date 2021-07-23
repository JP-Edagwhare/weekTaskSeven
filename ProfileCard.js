import React, { Component } from 'react'

export default class ProfileCard extends Component {
    render() {
        return (
            <div>
               <img src={this.props.user[0].avatar} alt=""></img>
               <h1>{this.props.user[0].name}</h1>
               <label for="location">Location:</label>
               <h3>{this.props.user[0].location}</h3>
               <label for="foodtype">Food Type:</label>
               <h3>{this.props.user[0].foodType}</h3>
               <label for="age">Age:</label>
               <h3>{this.props.user[0].age}</h3>
               <label for="likes">Likes:</label>
               <h3>{this.props.user[0].likes}</h3>
               <label for="twitter">Twitter:</label><br></br>
               <h3>{this.props.user[0].twitterLink}</h3>
            </div>

        )
        
    }
    
}