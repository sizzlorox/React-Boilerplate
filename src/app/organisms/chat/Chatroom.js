const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:4000');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Molecules
const UsersList = require('../../molecules/chat/UserList');
const MessageList = require('../../molecules/chat/MessageList');
const MessageForm = require('../../molecules/chat/MessageForm');

class Chatroom extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      text: '',
      messages: [],
      users: ['tester', 'you'],
      user: 'you'
    };

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
    socket.on('user:join', this._userJoined);
    socket.on('user:left', this._userLeft);
    socket.on('change:name', this._userChangedName);
    socket.on('connect_error', (err) => {
      const { messages } = this.state;
      messages.push({ user: 'Server', text: err.toString() });
      this.setState({ messages });
    });
    socket.on('connect_timeout', () => {
      const { messages } = this.state;
      messages.push({ user: 'Server', text: 'Connection to server has timed out.' });
      this.setState({ messages });
    });
    socket.on('reconnecting', (number) => {
      const { messages } = this.state;
      messages.push({ user: 'Server', text: `Reconnting... Attempt number ${number}.` });
      this.setState({ messages });
    });
    socket.on('reconnect', (number) => {
      const { messages } = this.state;
      messages.push({ user: 'Server', text: `Reconnected upon ${number} tries.` });
      this.setState({ messages });
    });
    socket.on('reconnect_error', (err) => {
      const { messages } = this.state;
      messages.push({ user: 'Server', text: err.toString() });
      this.setState({ messages });
    });
    socket.on('reconnect_error', () => {
      const { messages } = this.state;
      messages.push({ user: 'Server', text: 'Reconnection failed...' });
      this.setState({ messages });
    });
  }

  _initialize(data) {
    const { users, name } = data;
    this.setState({ users, user: name });
  }

  _messageRecieve(message) {
    const { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
  }

  _userJoined(data) {
    const { users, messages } = this.state;
    const { name } = data;
    users.push(name);
    messages.push({
      user: 'APPLICATION BOT',
      text: name + ' Joined'
    });
    this.setState({ users, messages });
  }

  _userLeft(data) {
    const { users, messages } = this.state;
    const { name } = data;
    const index = users.indexOf(name);
    users.splice(index, 1);
    messages.push({
      user: 'APPLICATION BOT',
      text: name + ' Left'
    });
    this.setState({ users, messages });
  }

  handleMessageSubmit(message) {
    const { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
    socket.emit('send:message', message);
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div>
          <section className={`${styles.gridX} ${styles.gridPaddingX}`}>
            <MessageList messages={this.state.messages} />
            <UsersList users={this.state.users} />
          </section>
          <section className={`${styles.gridX} ${styles.gridPaddingX}`}>
            <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
          </section>
        </div>
      )
  }
}
module.exports = Chatroom;