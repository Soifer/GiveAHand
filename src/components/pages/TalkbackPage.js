import React from 'react';
import PropTypes from 'prop-types';
import GetData from '../../services/talkbackService';
import Talkback from '../stateless/Talkback';


class TalkbackPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            posts: []
        };
    }

    componentDidMount() {
        let data = GetData(this.state.id);
          console.log('data',data);   
        data.then((data)=>{
            this.setState({
                posts: data
            });        
        });
    }

    render() {
        return (
            <div>
               <Talkback posts={this.state.posts}/>
            </div>
        );
    }
}

TalkbackPage.propTypes = {
    id: PropTypes.number
};

export default TalkbackPage;
