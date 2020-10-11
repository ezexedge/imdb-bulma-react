import React, { Component } from 'react';
import cars from './../cars.json'


class Hello extends Component {
    
    render() { 

        const {car} = this.props

        return ( 
       

         
            <li key={car.id}>

              <p>nombre : {car.name}</p>
              <p>marca : {car.company}</p>

            </li>


       
          
         );
    }
}
 
export default Hello;