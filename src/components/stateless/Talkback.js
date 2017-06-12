import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { alert } from 'bootstrap-css';

const Talkback = ({posts}) => {
    return (
        <div>
            {posts.map((item, index) => 
                <div key={item._id}>
                     <p className="glyphicon glyphicon-list-alt"/>
                     <p className="alert alert-warning">{item.Depth}</p>
                     <div dangerouslySetInnerHTML={{__html: item.MessageBody}} className="alert alert-danger" />                   
                </div>
              )              
            }           
        </div>
    );
};

Talkback.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Talkback;