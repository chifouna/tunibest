import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Moviecard = ({ movie }) => {
    return (
        <div>
            <div className='Movie'>

                <img className='ImageMovie' src={movie.image} alt='Movie' />
                <div className='Title-rating'>
                    <h6>{movie.titre}</h6>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={movie.rating}
                        //onStarClick={this.onStarClick.bind(this)}
                    />
                </div>
                <div className='MovieOver'>
                    <h2 style={{color:'blueviolet'}}>Overview</h2>
                    <p>{movie.description}</p>
                </div>

            </div>



        </div>
    )
}

export default Moviecard
