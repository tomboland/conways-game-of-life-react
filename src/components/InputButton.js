import React from 'react';
import './input-button.css';
import PropTypes from 'prop-types';


const InputButton = ({content, handleClick}) => (
    <button className="inputButton" onClick={handleClick}>
        {content}
    </button>
)

InputButton.propTypes = {
    content: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

InputButton.defaultProps = {
    handleClick: () => alert("not implemented"),
}

export default InputButton;