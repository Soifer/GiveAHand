import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './statelessComponents/NavigationBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Jumbotron>
                    {this.props.children}
                </Jumbotron>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;