import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignOutMenu from "./../Menus/SignOutMenu";
import SignInMenus from "./../Menus/SignInMenus";
class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };
  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push("/");
  };
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img
              src="https://images.unsplash.com/photo-1566411561323-466ba2f4dda7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="logo"
            />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignInMenus signOut={this.handleSignOut}></SignInMenus>
          ) : (
            <SignOutMenu signIn={this.handleSignIn}></SignOutMenu>
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
