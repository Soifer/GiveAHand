import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Tooltip, Popover, Button, OverlayTrigger} from 'react-bootstrap';
import FormButton from '../Form/FormButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TbForm from '../Form/TalkbackForm';
import toastr from 'toastr';

class ModalBs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            talkback: {
                text: '',
                title: ''
            },
            errors: {
                text: '',
                title: ''
            },
            visibility: "hidden"
        };
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
    }
    close() {
        this.setState({showModal: false});
    }

    open() {
        console.log("click");
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
        this.setState({visibility: "visible"});
        let errors = {};
        if (this.state.talkback.title.length < 5) {
            errors.title = 'title must be at least 5 characters.';
            formIsValid = false;
            this.setState({visibility: "hidden"});
            console.log('form error');
        }
        if (this.state.talkback.text.length < 1) {
            errors.text = "text area can't be empty";
            formIsValid = false;
            this.setState({visibility: "hidden"});
            console.log('form error');
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    saveTalkback(event) {
        console.log("onsave");
        event.preventDefault();

        let myFirstPromise = new Promise((resolve, reject) => {
            if (!this.talkbackFormIsValid()) {
                reject("validate error");
            } else {
                let that = this;
                console.log("promise success");
                setTimeout(function () {
                    that.setState({visibility: "hidden"});
                    resolve("success!!!");
                }, 4000);                
            }
        });

        myFirstPromise.then((result) => {
            toastr.success("saved!");
        }).catch((err) => {
            toastr.error("saved!");
            console.log("errror:", err);
        });
        // saveCourse(this.state.talkback)
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
            <div>
                <MuiThemeProvider>
                    <FormButton click={this.open}/>
                </MuiThemeProvider>
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
                            visibility={this.state.visibility}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ModalBs;
