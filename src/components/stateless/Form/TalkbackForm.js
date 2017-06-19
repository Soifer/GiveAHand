import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';

const TbForm = ({
    talkback,
    allAuthors,
    onSave,
    onChange,
    visibility,
    errors
}) => {
    let submitStyle = {
        visibility: visibility
    };
    return (
        <MuiThemeProvider>
            <form>
                <h1>Manage Talkback</h1>
                <TextInput
                    name="title"
                    label="Title"
                    value={talkback.title}
                    onChange={onChange}
                    error={errors.title}/>

                <TextArea
                    name="text"
                    label="Text"
                    value={talkback.text}
                    onChange={onChange}
                    error={errors.text}/>
                    <br/>
                <FlatButton
                     label="submit"
                     primary={true}
                     onClick={onSave}
                     value={visibility
                     ? 'Saving...'
                     : 'Save'}
                  />
                   <br/>
                   <div style={submitStyle}>
                        <LinearProgress 
                          mode="indeterminate"                         
                         />
                   </div>    
                   
                {/*<input
                    type="submit"
                    disabled={saving}
                    value={saving
                    ? 'Saving...'
                    : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave}/>*/}
            </form>
        </MuiThemeProvider>
    );
};

TbForm.propTypes = {
    talkback: React.PropTypes.object,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    visibility: React.PropTypes.string,
    errors: React.PropTypes.object
};

export default TbForm;