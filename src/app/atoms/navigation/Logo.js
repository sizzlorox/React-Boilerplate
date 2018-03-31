const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const { Link } = require('react-router-dom');

// Atoms
const Loading = require('../loading/Loading');

class Logo extends React.Component {
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
        <Link className={styles.logo} to='/'>
          <img src={this.props.imageUrl}></img>
        </Link>
      );
  }
}
module.exports = Logo;