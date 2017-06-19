import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextArea = ({
    name,
    label,
    onChange,
    placeholder,
    value,
    error
}) => {
    // let wrapperClass = 'form-group';
    // if(error && error.length > 0){
    //     wrapperClass += " " + 'has-error';
    // }
    return (
        <div>
           <TextField
                hintText={name}
                errorText={error}
                floatingLabelText="Text"
                multiLine={true}
                name={name}
                value={value}
                onChange={onChange}
                rows={2}
             />
        </div>
        // <div className={wrapperClass}>
        //     <label htmlFor="{name}">{label}</label>
        //     <div className="field">
        //         <textarea                  
        //          name={name}
        //          className="form-control"
        //          placeholder={placeholder}
        //          value={value}
        //          onChange={onChange}/>
        //          {error && <div className="alert alert-danger">{error}</div>}
        //     </div>
        // </div>
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