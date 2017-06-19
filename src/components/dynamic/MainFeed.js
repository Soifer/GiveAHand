import React from 'react';
import PropTypes from 'prop-types';
import GetData from '../../services/mainFeedService';
import constants from '../../constants';
import HeadLineList from '../../components/stateless/HeadlineList';


class MainFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        let data = GetData();
        data.then((feed)=>{
            this.setState({
                list: feed
            });
        });
    }

    render() {
        return (
            <div>              
               <HeadLineList headlineList={this.state.list}/>
            </div>
        );
    }
}

export default MainFeed;
