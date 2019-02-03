import React from 'react';
import './square.css';
import PropTypes from 'prop-types';

const Square = ({content, handleClick}) => (
    <button className="square" onClick={handleClick}>
        {content}
    </button>
)
 
Square.propTypes = {
    content: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

Square.defaultProps = {
    handleClick: () => alert("not implemented"),
}

export default Square;