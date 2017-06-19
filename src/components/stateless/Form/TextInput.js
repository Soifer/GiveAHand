import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';


const TextInput = ({
    name,
    label,
    onChange,
    placeholder,
    value,
    error
}) => {
    return (
        <div>        
            <TextField
              hintText={name}              
              errorText= {error}
              name={name}             
              floatingLabelText="Title"
              value={value}
              onChange={onChange}
             />             
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;