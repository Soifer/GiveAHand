import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const FormButton = ({click}) => {
    let style = {
        position: 'fixed',
        bottom: 10,
        left: 10
    };
    return (
        <div>
            <FloatingActionButton style={style} onTouchTap={click}>
                <ContentAdd/>
            </FloatingActionButton>
        </div>
    );
};

FormButton.propTypes = {
    click: PropTypes.func
};

export default FormButton;