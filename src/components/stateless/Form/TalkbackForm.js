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
    errors,
    saving
}) => {
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
                     primary={true}
                     onClick={onSave}
                     label={saving
                     ? 'Saving...'
                     : 'SUBMIT'}
                  />
                   <br/>
                   {saving && <LinearProgress mode="indeterminate" />}
            </form>
        </MuiThemeProvider>
    );
};

TbForm.propTypes = {
    talkback: React.PropTypes.object,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    errors: React.PropTypes.object,
    saving: React.PropTypes.bool
};

export default TbForm;