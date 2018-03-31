const React = require('react');
const ReactDOM = require('react-dom');

// Atoms
const Loading = require('./loading/Loading');

class Header1 extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
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
        <h1 className={this.props.className}>
          {this.props.children}
        </h1>
      );
  }
}
module.exports = Header1;