import React, { Component } from 'react';
import Cart from './Cart'
class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>

                <Cart/>


            </React.Fragment>
         );
    }
}
 
export default Producto;