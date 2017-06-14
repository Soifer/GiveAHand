import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Tooltip, Popover, Button, OverlayTrigger} from 'react-bootstrap';
import FormButton from './FormButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TbForm from '../Form/TalkbackForm';

class ModalBs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

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
                       <TbForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
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