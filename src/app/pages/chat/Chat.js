const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organisms
const Chatroom = require('../../organisms/chat/Chatroom');

class Chat extends React.Component {
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
    $('#chat').ready(() => {
      $('#chat').foundation();
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div id='chat'>
          <Chatroom />
        </div>
      )
  }
}
module.exports = Chat;