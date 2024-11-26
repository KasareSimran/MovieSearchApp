// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie: { Year, Poster, Title, Type } }) => {
    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img
                    src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
                    alt={Title}
                />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

// Validate props using PropTypes
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;
