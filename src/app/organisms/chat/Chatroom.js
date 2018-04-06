const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const io = require('socket.io-client');
let socket;

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
      users: ['tester'],
      user: localStorage.getItem('username')
    };

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    if (localStorage.getItem('token')) {
      socket = io.connect('http://localhost:4000');
      // TODO change to socket on connect to populate current user when api is finished
      const { users } = this.state;
      users.push(this.state.user);
      this.setState({ users });

      socket.on('init', this._initialize);
      socket.on('send:message', this._messageRecieve);
      // socket.on('connect_error', (err) => {
      //   const { messages } = this.state;
      //   messages.push({ user: 'Server', text: err.toString() });
      //   this.setState({ messages });
      // });
      socket.on('connect_timeout', () => {
        const { messages } = this.state;
        messages.push({ user: 'Server', text: 'Connection to server has timed out.' });
        if (messages.length > 30) {
          messages.splice(0, 1);
        }
        this.setState({ messages });
      });
      socket.on('reconnecting', (number) => {
        const { messages } = this.state;
        messages.push({ user: 'Server', text: `Reconnting... Attempt number ${number}.` });
        if (messages.length > 30) {
          messages.splice(0, 1);
        }
        this.setState({ messages });
      });
      socket.on('reconnect', (number) => {
        const { messages } = this.state;
        messages.push({ user: 'Server', text: `Reconnected upon ${number} tries.` });
        if (messages.length > 30) {
          messages.splice(0, 1);
        }
        this.setState({ messages });
      });
      socket.on('reconnect_error', () => {
        const { messages } = this.state;
        messages.push({ user: 'Server', text: 'Reconnection failed...' });
        if (messages.length > 30) {
          messages.splice(0, 1);
        }
        this.setState({ messages });
      });
    }
  }

  _initialize(data) {
    const { users, name } = data;
    this.setState({ users, user: name });
  }

  _messageRecieve(message) {
    const { messages } = this.state;
    messages.push(message);
    if (messages.length > 30) {
      messages.splice(0, 1);
    }
    this.setState({ messages });
  }

  handleMessageSubmit(message) {
    const { messages } = this.state;
    messages.push(message);
    if (messages.length > 30) {
      messages.splice(0, 1);
    }
    this.setState({ messages });
    socket.emit('send:message', message);
  }

  render() {
    return localStorage.getItem('token') ?
      this.state.isLoading
        ? (<Loading />)
        : (
          <div className={styles.gridContainer}>
            <section className={`${styles.gridX}`}>
              <MessageList messages={this.state.messages} />
              <UsersList users={this.state.users} />
            </section>
            <section>
              <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
            </section>
          </div>
        )
      : null
  }
}
module.exports = Chatroom;