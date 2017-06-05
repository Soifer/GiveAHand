import React from 'react';
import PropTypes from 'prop-types';
import MainTopFour from './../dynamic/MainTopFour';
import MainFeed from './../dynamic/MainFeed';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {};
    }
    render() {
        return (
            <div>
                <MainTopFour/>
                <MainFeed/> 
            </div>
        );
    }
}
export default MainPage;