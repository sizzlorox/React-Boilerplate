const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const { NavLink } = require('react-router-dom');

// Atoms
const Loading = require('../../atoms/loading/Loading');

class Navigation extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <section>
          <ul className={styles.menu}>
            <li>
              <NavLink to={{
                pathname: '/',
                activeClassName: styles.isActive,
                state: { fromNavigation: true }
              }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/about',
                activeClassName: styles.isActive,
                state: { fromNavigation: true }
              }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/faq',
                activeClassName: styles.isActive,
                state: { fromNavigation: true }
              }}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/chatroom',
                activeClassName: styles.isActive,
                state: { fromNavigation: true }
              }}>
                Chatroom
              </NavLink>
            </li>
          </ul>
        </section>
      )
  }
}
module.exports = Navigation;