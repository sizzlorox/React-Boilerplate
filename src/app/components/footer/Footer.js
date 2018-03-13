const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.css');

class Footer extends React.Component {
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
      <footer className={styles.footer}>Copyright and footer links here.</footer>
    )
  }
}
module.exports = Footer;