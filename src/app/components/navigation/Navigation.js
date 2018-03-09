const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('./navigation.css');

class Navigation extends React.Component {
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
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/'>Contact</Link></li>
      </ul>
    )
  }
}
module.exports = Navigation;