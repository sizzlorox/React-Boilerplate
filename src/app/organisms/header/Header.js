const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Molecules
const Navigation = require('../../molecules/navigation/Navigation');
const AccountManagement = require('../../molecules/navigation/account-menu/AccountManagement');
const NavigationDropDown = require('../../molecules/navigation/drop-down-menu/NavigationDropDown');

class Header extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      authenticated: false
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    $('#header').ready(() => {
      $('#header').foundation();
    });
    this.setState({ isLoading: false });

    if (localStorage.getItem('token')) {
      this.setState({ authenticated: true });
    }
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div id='header' className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <ul className={`${styles.menu}`}>
              <li className={styles.menuText}>
                BoilerPlate
              </li>
              <Navigation />
            </ul>
          </div>
          {this.state.authenticated ? <NavigationDropDown className={styles.topBarRight} /> : <AccountManagement className={styles.topBarRight} />}
        </div>
      )
  }
}
module.exports = Header;