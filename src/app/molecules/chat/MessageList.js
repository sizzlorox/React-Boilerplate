const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const Message = require('../../atoms/chat/Message');

class MessageList extends React.Component {
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
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div className={`${styles.cell} ${styles.auto}`}>
          <h2>Chatroom:</h2>
          {
            this.props.messages.map((message, i) => {
              return (
                <Message
                  key={i}
                  user={message.user}
                  text={message.text}
                />
              );
            })
          }
        </div>
      )
  }
}
module.exports = MessageList;