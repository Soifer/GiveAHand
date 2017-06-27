import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const TbForm = ({
    talkback,
    onSave,
    onChange,
    onChangeMessage,
    errors,
    saving,
    sendMessage,
    messages,
    message
}) => {
    let chip = {
      margin: 4
    };
    let messagesStyle = {
        height: '70%',
        'overflow-y': 'overlay',
        display: 'flex',
        flexWrap: 'wrap'
    };
    let messagesFormStyle = {
        height: '30%'
    };
    return (
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <form>
                    <h1>Talkback</h1>
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
                        : 'SUBMIT'}/>
                    <br/> {saving && <LinearProgress mode="indeterminate"/>}
                </form>
            </div>
            <div className="col-md-6 col-lg-6">
                <div style={messagesFormStyle} className="row">
                    <div className="col-md-12">
                        <h1>Chat with AI</h1>
                        <form>
                            <TextInput
                                name="message"
                                label="message"
                                value={message}
                                onChange={onChangeMessage}/>
                            <FlatButton secondary={true} onClick={sendMessage} label={'message'}/>
                        </form>
                    </div>
                </div>
                <div  className="row">
                    <div style={messagesStyle} className="col-md-12">
                        {messages.map((item, index) => <div>
                            <Chip style={chip}>
                                <Avatar color="#444" icon={< SvgIconFace />}/>
                                {item}
                            </Chip>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

TbForm.propTypes = {
    talkback: React.PropTypes.object,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onChangeMessage: React.PropTypes.func,
    errors: React.PropTypes.object,
    saving: React.PropTypes.bool,
    sendMessage: React.PropTypes.func,
    messages: React.PropTypes.array,
    message: React.PropTypes.string
};

export default TbForm;