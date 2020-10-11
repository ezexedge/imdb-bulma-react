import React, { Component } from 'react';
import Titulo from '../componentes/Title'
import SearchForm from '../componentes/SearchForm'
import MoviesList from '../componentes/MoviesList'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         usedSearch: false ,  results : []
         }
      }
    
    
      _handleResults = (results) => {
        this.setState({ results , usedSearch: true })
      }
    
      _renderResult = () => {
        return    this.state.results.length === 0 ? 
          <p className="has-text-danger">no hay resultados  </p> :
           <MoviesList  movies={this.state.results} />
      }

    render() { 
        return ( 

            <React.Fragment>
                    <Titulo >Buscador de peliculas</Titulo>

                    <div className="form-wrapper">


                    <SearchForm onResults={this._handleResults}/>

                    </div>
                    <div className="container">
                    {this.state.usedSearch ? this._renderResult() 
                    : <small> use el formulario para buscar pelicula</small>}

                    </div>
               


          <footer className="footer">
            <div className="content has-text-centered">
            
          <h3>powered -  React + Bulma.css <span className="icon has-text-danger"> ♥️ </span>  IMDB</h3>

            </div>
          </footer>
            </React.Fragment>


         );
    }
}
 
export default Home;