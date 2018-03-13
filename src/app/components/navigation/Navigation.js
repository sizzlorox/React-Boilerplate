const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('./navigation.css');

class Navigation extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <ul className={styles.navigation}>
        <li><Link to='/'>Home</Link></li>
        <li><Link styles={this.props.styles} to='/about'>About</Link></li>
        <li><Link styles={this.props.styles} to='/faq'>FAQ</Link></li>
        <li><Link to='/'>Contact</Link></li>
      </ul>
    )
  }
}
module.exports = Navigation;