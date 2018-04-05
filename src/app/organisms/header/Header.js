const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Molecules
const Navigation = require('../../molecules/navigation/Navigation');
const AccountManagement = require('../../molecules/navigation/account-menu/AccountManagement');

class Header extends React.Component {
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
    $('#header').ready(() => {
      $('#header').foundation();
    });
    this.setState({ isLoading: false });
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
          <AccountManagement className={styles.topBarRight} />
        </div>
      )
  }
}
module.exports = Header;