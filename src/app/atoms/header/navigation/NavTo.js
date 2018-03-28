const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');

// Atoms
const Loading = require('../../loading/Loading');

class NavTo extends React.Component {
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
        <li>
          <Link to={this.props.url}>
            {this.props.children}
          </Link>
        </li>
      );
  }
}
module.exports = NavTo;