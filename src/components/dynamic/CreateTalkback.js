import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Tooltip, Popover, Button, OverlayTrigger} from 'react-bootstrap';
import FormButton from '../stateless/Form/FormButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TbForm from '../stateless/Form/TalkbackForm';
import toastr from 'toastr';
import io from 'socket.io-client';

const socket = io("localhost:8000");

class CreateTalkback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: "",
            showModal: false,
            talkback: {
                text: '',
                title: ''
            },
            errors: {
                text: '',
                title: ''
            },
            saving: false
        };
        let self = this;
        socket.on('chat message', function (msg) {
            toastr.success("server said: " + msg);
            self.setState({message: msg});
            self.addMessageToList();
        });
        this.updateTalkbackState = this
            .updateTalkbackState
            .bind(this);
        this.saveTalkback = this
            .saveTalkback
            .bind(this);
        this.close = this
            .close
            .bind(this);
        this.open = this
            .open
            .bind(this);
        this.onMessage = this
            .onMessage
            .bind(this);
        this.onChangeMessage = this
            .onChangeMessage
            .bind(this);
    }
    close() {
        this.setState({
            talkback: {
                text: "",
                title: ""
            }
        });
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    updateTalkbackState(event) {
        const field = event.target.name;
        let talkback = this.state.talkback;
        talkback[field] = event.target.value;
        this.setState({
            talkback: talkback,
            errors: {
                text: '',
                title: ''
            }
        });
        console.log("talkback", talkback);
    }

    talkbackFormIsValid() {
        let formIsValid = true;
        this.setState({saving: true});
        let errors = {};
        if (this.state.talkback.title.length < 5) {
            errors.title = 'title must be at least 5 characters.';
            formIsValid = false;
            this.setState({saving: false});
            console.log('form error');
        }
        if (this.state.talkback.text.length < 1) {
            errors.text = "text area can't be empty";
            formIsValid = false;
            this.setState({saving: false});
            console.log('form error');
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    saveTalkback(event) {
        event.preventDefault();
        let myFirstPromise = new Promise((resolve, reject) => {
            if (!this.talkbackFormIsValid()) {
                reject("validate error");
            } else {
                let that = this;
                console.log("promise success");
                setTimeout(function () {
                    that.setState({saving: false});
                    resolve("success!!!");
                }, 4000);
            }
        });
        myFirstPromise.then((result) => {
            this
                .props
                .onSave(this.state.talkback)
                .then((result) => {
                    toastr.success("saved on: " + result.response);
                    this.close();
                })
                .catch((error) => {
                    toastr.error("not saved because of: " + error);
                });

        }).catch((err) => {
            toastr.error("not saved");
            console.log("errror:", err);
        });
        // saveCourse(this.state.talkback)
    }

    addMessageToList() {
        this.setState({
            messages: this
                .state
                .messages
                .concat(this.state.message)
        });
    }
    onMessage() {
        //this.addMessageToList();
        socket.emit('chat message', this.state.message);
    }
    onChangeMessage(event) {
        this.setState({message: event.target.value});
        console.log("message:", event.target.value);
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                tooltip
            </Tooltip>
        );
        const modalStyle = {
            direction: 'ltr'
        };
        return (
            <MuiThemeProvider>
                <div>
                    <FormButton click={this.open}/>
                    <Modal style={modalStyle} show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Talkback</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TbForm
                                talkback={this.state.talkback}
                                onChange={this.updateTalkbackState}
                                onSave={this.saveTalkback}
                                errors={this.state.errors}
                                visibility={this.state.visibility}
                                saving={this.state.saving}
                                sendMessage={this.onMessage}
                                messages={this.state.messages}
                                message={this.state.message}
                                onChangeMessage={this.onChangeMessage}/>
                        </Modal.Body>
                    </Modal>
                </div>
            </MuiThemeProvider>
        );
    }
}

CreateTalkback.propTypes = {
    onSave: React.PropTypes.func
};

export default CreateTalkback;
