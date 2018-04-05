const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../loading/Loading');

class LoginModal extends React.Component {
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
    console.log('LM Mounted')
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    $(`#${this.props.id}`).foundation('close');
  }

  render() {
    // button data-close needed ="" or console will throw 'el.data(...).split is not a function'
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div className={styles.reveal} id={this.props.id} data-reveal data-close-on-click='true'>
          <h1>Login</h1>
          <form>
            <div className={styles.gridContainer}>
              <div className={`${styles.gridX} ${styles.gridPaddingX}`}>
                <div className={`${styles.medium6} ${styles.cell}`}>
                  <label>Username</label>
                  <input type='text' ref='username' autoComplete='username' maxLength='20' required />
                </div>
                <div className={`${styles.medium6} ${styles.cell}`}>
                  <label>Password</label>
                  <input type='password' ref='password' autoComplete='current-password' maxLength='250' required />
                </div>
                <div className={`${styles.buttonGroup} ${styles.alignRight} ${styles.cell}`}>
                  <button type='submit' id='loginSubmit' className={styles.button}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button className={styles.closeButton} data-close='' aria-label='Close reveal' type='button'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
      )
  }
}
module.exports = LoginModal;