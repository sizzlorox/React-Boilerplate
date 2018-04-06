const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../../app.scss');
const $ = require('jquery');

// Atoms
const LoginModal = require('../../../atoms/navigation/account-menu/LoginModal');
const RegisterModal = require('../../../atoms/navigation/account-menu/RegisterModal');
const DropDownMenu = require('../../../atoms/drop-down-menu/DropDownMenu');
const DropDownSubject = require('../../../atoms/drop-down-menu/DropDownSubject');
const DropDownItem = require('../../../atoms/drop-down-menu/DropDownItem');

class AccountManagement extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      authenticated: localStorage.getItem('token')
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log('AM Mounted');

  }

  handleLogin(e) {
    const { username, password } = this.refs.loginModal.refs;
    if (username.value === 'test' && password.value === 'test') {
      localStorage.setItem('username', username.value);
      localStorage.setItem('token', true);
      this.setState({
        username,
        authenticated: localStorage.getItem('token')
      });
    }
  }

  handleLogout() {
    localStorage.clear();
    this.setState({ authenticated: localStorage.getItem('token') });
    window.location.reload();
  }

  // TODO: Create Register handler
  render() {
    return this.state.authenticated
      ? (
        <div className={this.props.className}>
          <DropDownMenu>
            <DropDownSubject menuName='Account'>
              <DropDownItem url='/profile'>
                Profile
              </DropDownItem>
              <DropDownItem url='/settings'>
                Settings
              </DropDownItem>
              <DropDownItem onClick={this.handleLogout} url='/logout'>
                Log Out
              </DropDownItem>
            </DropDownSubject>
          </DropDownMenu>
        </div>
      )
      :
      (
        <div>
          <div className={`${this.props.className} ${styles.menu} ${styles.tiny} ${styles.buttonGroup}`}>
            <button className={styles.button} data-toggle='loginModal'>
              Login
            </button>
            <LoginModal onSubmit={this.handleLogin} id='loginModal' ref='loginModal' />
            <button className={styles.button} data-toggle='registerModal'>
              Register
            </button>
            <RegisterModal id='registerModal' />
          </div>
        </div>
      )
  }
}
module.exports = AccountManagement;