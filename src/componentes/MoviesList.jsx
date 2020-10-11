import React, { Component } from 'react';
import Movie from './Movie'
class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const { movies } = this.props

        return(
            <div className="container">
           <div clasName="MoviesList">
              
                    <div className="columns is-multiline is-mobile">
                {
         movies.map(movie=>{
            return(
                <div key={movie.imdbID} className=" column is-3">
                <Movie
                id={movie.imdbID}
                title={movie.Title}
                years={movie.Year}
                poster={movie.Poster}
                />
                </div>

            )
        })
        
    }
       </div>     
       </div>    


            </div>
        )

       

        
    }
}
 
export default MoviesList;