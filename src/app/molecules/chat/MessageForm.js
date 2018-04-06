const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

class MessageForm extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {
      user: this.props.user,
      text: this.state.text
    }
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  }

  changeHandler(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <form className={`${styles.gridX} ${styles.gridPaddingX}`} onSubmit={this.handleSubmit}>
          <input className={`${styles.cell} ${styles.auto}`} onChange={this.changeHandler} value={this.state.text} />
          <button className={`${styles.cell} ${styles.button} ${styles.chatsubmitbtn} ${styles.shrink} ${styles.tiny}`} type='submit'>Send</button>
        </form>
      )
  }
}
module.exports = MessageForm;