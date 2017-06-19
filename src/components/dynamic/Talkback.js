import React from 'react';
import PropTypes from 'prop-types';
import CreateTalkback from '../dynamic/CreateTalkback';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormButton from '../stateless/Form/FormButton';
import GetData, {PostData} from '../../services/talkbackService';

class Talkback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        let data = GetData(this.state.id);
        console.log('data', data);
        data.then((data) => {
            this.setState({posts: data});
        });
    }

    onSave(talkback) {
        let data = PostData(talkback);
        console.log('data talkback', data);
        //return
    }

    render() {
        let style = {
            overflow: 'hidden'
        };
        return (
            <div>
                {this.state.posts && this
                    .state
                    .posts
                    .map((item, index) => <div key={item._id}>
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <span className="label label-danger pull-left">{item.Depth}</span>                                
                                <h3 className="panel-title">{item._id}</h3>
                            </div>
                            <div style={style} className="panel-footer">
                                <span className="label label-warning pull-left">{index}</span>
                                {item.MessageBody}                                
                            </div>
                        </div>
                    </div>)}
                <CreateTalkback onSave={this.onSave}/>
            </div>
        );
    }
}

export default Talkback;