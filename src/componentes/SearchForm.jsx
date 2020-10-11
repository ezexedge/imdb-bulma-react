import React, { Component } from 'react';


const API_KEY = 'f4f1f5b3'

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            inputMovie : ''
         }
    }


    _hangleChange = (e) => {
        this.setState({inputMovie : e.target.value})
    }

    _hangleSubmit = (e) =>{
        e.preventDefault()
        //alert(this.state.inputMovie)
        const {inputMovie} = this.state
        
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                
                const {Search = [] , totalResults = "0" } = results
                console.log({ Search , totalResults})
                this.props.onResults(Search)


            })
        

    }
    render() { 




        return ( 
            <form onSubmit={this._hangleSubmit}>
            <div className="field has-addons">
            <div className="control">
              <input className="input"
               type="text"
               onChange={this._hangleChange}
                placeholder="Ej: fargo"
                />
            </div>
            <div className="control">
              <button className="button is-info">
                Search
              </button>
            </div>
          </div> 
          </form>               
            )
    }
}
 
export default SearchForm;