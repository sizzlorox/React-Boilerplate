const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../../app.scss');

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleSubmit(formInfo) {
    alert(JSON.stringify(formInfo));
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div className={styles.reveal} id={this.props.id} data-reveal data-close-on-click='true'>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.gridContainer}>
              <div className={`${styles.gridX} ${styles.gridPaddingX}`}>
                <div className={`${styles.medium6} ${styles.cell}`}>
                  <label>Username</label>
                  <input type='text' autoComplete='username' maxlength='20' required />
                </div>
                <div className={`${styles.medium6} ${styles.cell}`}>
                  <label>Password</label>
                  <input type='password' autoComplete='current-password' maxlength='250' required />
                </div>
                <div className={`${styles.buttonGroup} ${styles.alignRight} ${styles.cell}`}>
                  <button type='submit' className={styles.button}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button className={styles.closeButton} data-close="" aria-label='Close reveal' type='button'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
      )
  }
}
module.exports = LoginModal;