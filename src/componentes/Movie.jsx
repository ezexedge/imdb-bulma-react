import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Movies extends Component {
     

    render() { 

        const {id , poster , title , years}  = this.props

        return (  

            <Link to={`/detail/${id}`} className="card">
                    <div className="card-image">
                        <figure className="image ">
                        <img src={poster} alt={title}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                      
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{years}</p>
                        </div>
                     </div>
                    </div>
                    </Link>



        );
    }
}
 
export default Movies;