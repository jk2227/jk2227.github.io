import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1, 
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey) {
        this.setState({activeKey});
    }
    
    render() {
        return (
            <div class = "navbar">
                    <Nav bsStyle="pills" activeKey={this.state.activeKey} justified pullRight={true} onSelect={this.handleSelect}>
                        <IndexLinkContainer to="/">
                            <NavItem eventKey={1} href="/home">Home</NavItem>
                        </IndexLinkContainer>
                        {/* <LinkContainer to="/checkin"> */}
                            <NavItem eventKey={2} href="/checkin">one</NavItem>
                        {/* </LinkContainer>
                        <LinkContainer to="/checkout"> */}
                            <NavItem eventKey={3} href="/checkout">two</NavItem>
                        {/* </LinkContainer>
                        <LinkContainer to="/viewshifts"> */}
                            <NavItem eventKey={4} href="/viewshifts">three</NavItem>
                        {/* </LinkContainer> */}
                    </Nav>
            </div>
        );
    }
};
