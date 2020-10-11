import React, { Component } from 'react';
import 'bulma/css/bulma.css'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { qty: 0 }
    }

    componentDidMount(){
        console.log('se ejecuta antes de renderizar')
    }

    updateQty = () => (
        this.setState((state)=> (
            {qty : state.qty + 1}
        ))
    )

    render() { 
        return ( 

            <React.Fragment>


        <h2>Cart items {this.state.qty}</h2>


            </React.Fragment>


         );
    }
}
 
export default Cart;