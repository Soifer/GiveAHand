import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './stateless/ui/NavBar'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;