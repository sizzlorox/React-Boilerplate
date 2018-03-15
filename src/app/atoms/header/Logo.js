const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('../../app.scss');

class Logo extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <a className={styles.logo} href='/'>
        <img src={this.props.imageUrl}></img>
      </a>
    );
  }
}
module.exports = Logo;