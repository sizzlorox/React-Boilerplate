const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.css');

class Footer extends React.Component {
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