const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../../app.scss');

// Atoms
const NavTo = require('../../../atoms/header/navigation/NavTo');

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
      <section>
        <ul className={styles.menu}>
          <NavTo url='/'>
            Home
          </NavTo>
          <NavTo url='/about'>
            About
          </NavTo>
          <NavTo url='/faq'>
            FAQ
          </NavTo>
        </ul>
      </section>
    )
  }
}
module.exports = Navigation;