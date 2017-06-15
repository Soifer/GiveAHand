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
            talkback:{
                text:'',
                title:''
            },
            errors:{
                text:'',
                title:''
            },
            saving:false
        };
        this.updateTalkbackState = this.updateTalkbackState.bind(this);
        this.saveTalkback = this.saveTalkback.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({showModal: false});
    }

    open() {
        console.log("click");
        this.setState({showModal: true});
    }

    updateTalkbackState(event){
        const field = event.target.name;
        let talkback = this.state.talkback;
        talkback[field] = event.target.value;
        this.setState({talkback: talkback});
        console.log("talkback",talkback);
    }
    
    talkbackFormIsValid(){
        let formIsValid = true;
        let errors = {};
        if(this.state.talkback.title.length < 5){
            errors.title = 'title must be at least 5 characters.';
            formIsValid = false;
            console.log('form error');
        }
        if(this.state.talkback.text.length < 1){
            errors.text = "text area can't be empti";
            formIsValid = false;
            console.log('form error');
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    saveTalkback(event){
        event.preventDefault();
        if (!this.talkbackFormIsValid()){
            return;
        }
        console.log("saving 2");
        toastr.success("saved!");

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
        const modalStyle ={
            direction:'ltr'
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
                       />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ModalBs;









                        // <h4>Text in a modal</h4>
                        // <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        // <h4>Popover in a modal</h4>
                        // <p>there is a
                        //     <OverlayTrigger overlay={popover}>
                        //         <a href="#">popover</a>
                        //     </OverlayTrigger>
                        //     here</p>

                        // <h4>Tooltips in a modal</h4>
                        // <p>there is a
                        //     <OverlayTrigger overlay={tooltip}>
                        //         <a href="#">tooltip</a>
                        //     </OverlayTrigger>
                        //     here</p>

                        // <hr/>

                        // <h4>Overflowing text to show scroll behavior</h4>
                        // <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        //     facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        //     vestibulum at eros.</p>