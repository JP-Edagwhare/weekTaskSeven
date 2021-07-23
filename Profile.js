import React from 'react'

export default function Profile(props) {
    return (
        <div>
          <img src={props.userS[1].avatar} alt=""></img>
               <h1>{props.userS[1].name}</h1>
               <label for="location">Location:</label>
               <h3>{props.userS[1].location}</h3>
               <label for="foodtype">Food Type:</label>
               <h3>{props.userS[1].foodType}</h3>
               <label for="age">Age:</label>
               <h3>{props.userS[1].age}</h3>
               <label for="likes">Likes:</label>
               <h3>{props.userS[1].likes}</h3>
               <label for="twitter">Twitter:</label>
               <h3>{props.userS[1].twitterLink}</h3>  
        </div>
    )
}
