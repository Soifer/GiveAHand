import React from 'react';
import PropTypes from 'prop-types';
import GetData from '../../services/mainTopFourService';
import constants from '../../constants';
import HeadLineList from '../../components/stateless/HeadlineList';


class MainTopFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        let data = GetData();
        data.then((topFour)=>{
            console.log("data",topFour);
            this.setState({
                list: topFour
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

export default MainTopFour;

                // {this.state.list.map((item)=>{
                    
                // })}