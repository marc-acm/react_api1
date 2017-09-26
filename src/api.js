import React, { Component } from 'react';



const ul = document.getElementById('breeds');
const url = 'https://dog.ceo/dog-api';



 class Api extends Component {
     constructor(props) {
          super(props)
          this.state = {
               requestFailed: false
          }
     }

   	fetch(url)
       .then((resp) => resp.json())
       .then(function(data) {
          let breeds = data.results;
          return breeds.map(function(breed)
            
           });
        .catch(function(error) {
       });
      }

 	    render () {
          if(this.state.requestFailed) return <p>Hindi Pa Okay Ulitin Mo!</p>
          if (!this.state.apiData) return <p>Loading...</p>
 		  return (
 			  <div>
 			   <h2>{this.state.apiData.breeds}</h2>
 			   </div> 	
 	     )
 	     }
 


 export default Api