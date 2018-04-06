const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

class MessageList extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      messages: this.props.messages
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleChange() {
    this.setState({
      messages: this.props.messages
    });
    $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div className={`${styles.cell} ${styles.auto}`}>
          <textarea id='chatbox' className={styles.chatroom} onChange={this.handleChange} value={
            this.state.messages.map((message, i, arr) => {
              return i === (arr.length - 1) ? `${message.user}: ${message.text}` : `${message.user}: ${message.text}\n` ;
            })} />
        </div>
      )
  }
}
module.exports = MessageList;