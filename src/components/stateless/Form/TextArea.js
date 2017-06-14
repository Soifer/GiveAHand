import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
    name,
    label,
    onChange,
    placeholder,
    value,
    error
}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
        wrapperClass += " " + 'has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor="{name}">{label}</label>
            <div className="field">
                <textarea                  
                 name={name}
                 className="form-control"
                 placeholder={placeholder}
                 value={value}
                 onChange={onChange}/>
                 {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextArea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

export default TextArea;