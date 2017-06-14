import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {alert} from 'bootstrap-css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormButton from '../stateless/ui/FormButton';

const Talkback = ({posts}) => {
    return (
        <div>
            {posts.map((item, index) => <div key={item._id}>
                <p className="alert alert-info">
                    {item.Depth}
                </p>
                <div
                    dangerouslySetInnerHTML={{
                    __html: item.MessageBody
                }}
                    className="alert alert-warning"/>
            </div>)
}
            <MuiThemeProvider>
                <FormButton label="Default"/>
            </MuiThemeProvider>
        </div>
    );
};

Talkback.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Talkback;