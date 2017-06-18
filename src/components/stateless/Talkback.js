import React from 'react';
import PropTypes from 'prop-types';
import ModalBs from '../stateless/ui/Modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormButton from '../stateless/Form/FormButton';

const Talkback = ({posts}) => {
    let style = {
        overflow: 'hidden'
    }
    return (
        <div>
            {posts.map((item, index) => <div key={item._id}>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span className="label label-danger pull-left">{item.Depth}</span>
                        <h3 className="panel-title">Panel title</h3>
                    </div>
                    <div style={style} className="panel-footer">{item.MessageBody}</div>
                </div>
            </div>)}
            <ModalBs/>
        </div>
    );
};

Talkback.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Talkback;