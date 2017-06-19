import React from 'react';
import PropTypes from 'prop-types';
import GetData from '../../services/talkbackService';
import Talkback from '../dynamic/Talkback';

class TalkbackPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        };
    }

    render() {
        return (
            <div className="container-fluid" >
               <Talkback/>           
            </div>
        );
    }
}

TalkbackPage.propTypes = {
    id: PropTypes.number
};

export default TalkbackPage;
