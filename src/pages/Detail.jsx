import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const API_KEY = 'f4f1f5b3'

class Detail extends Component {
    

    constructor(props) {
        
        super(props);
        this.state = { 
            movie : {
            
            },
            load:false
            
         }
    }




    _fetchMovie({id}){
        console.log(this.state.load)

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
          //  console.log(movie.Ratings[0].Value)

            this.setState({movie ,load: true})
            console.log(this.state)

        })

    }


    componentDidMount(){
        const {id} = this.props.match.params
        this._fetchMovie({id})

    }

    render() { 

        const  {Title , Poster , Actors , Metascore , Year , imdbRating,Type,  Plot , imdbID,Genre} = this.state.movie
       // console.log(this.state.movie.Ratings[0].Value)
       console.log(this.state.movie)
       
        
        return ( 

            <React.Fragment>
                <div className="container">
                <Link  to='/' className="button is-info volver" >volver</Link>

                {  this.state.load ? (
                    <div>
                <h4 className="heading-1">{Title}</h4>
                <img src={Poster} />
                <h3 className="sub-heading">Estreno : {Year}</h3>
                <h3 className="sub-heading">Tipo : {Type}</h3>
                <h3 className="sub-heading">Actores : {Actors}</h3>
                <h3 className="sub-heading">Genero : {Genre}</h3>
                
                <p className="genero">Rating:  ⭐️ {imdbRating}</p>

                <p clasName="texto ">{Plot}</p>
            
                
                <a href={ `https://www.imdb.com/title/${imdbID}/`} className="visitar" target="_blank">Ver pagina original</a>

                    </div>
                ) :  (      
                
                    <div className="spin">          
                    <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    </div>
                    </div>
                   
                    
                    )}
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
 
export default Detail;