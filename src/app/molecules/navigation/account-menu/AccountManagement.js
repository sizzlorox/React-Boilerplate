const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../../app.scss');

// Atoms
const Loading = require('../../../atoms/loading/Loading');
const LoginModal = require('../../../atoms/navigation/account-menu/LoginModal');
const RegisterModal = require('../../../atoms/navigation/account-menu/RegisterModal');

class AccountManagement extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    console.log(styles);
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
    // button data-close needed ="" or console will throw 'el.data(...).split is not a function'
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div className={`${this.props.className} ${styles.menu} ${styles.tiny} ${styles.buttonGroup}`}>
          <button className={styles.button} data-toggle='loginModal'>
            Login
          </button>
          <LoginModal id='loginModal' />
          <button className={styles.button} data-toggle='registerModal'>
            Register
          </button>
          <RegisterModal id='registerModal' />
        </div>
      )
  }
}
module.exports = AccountManagement;