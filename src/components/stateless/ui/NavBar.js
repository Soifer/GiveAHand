import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, withRouter} from 'react-router';

class NavigationBar extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {};
        this.redirect = this.redirect.bind(this);
    }

    redirect(target){
        this.context.router.push("/" + target);
    }

    render() {
        return (
            <div>
                <Navbar  collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/" >Main</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>                            
                            <NavItem onSelect={this.redirect} eventKey={'register'} href="" >Register</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>                     
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

NavigationBar.contextTypes ={
    router: PropTypes.object
};
export default NavigationBar;