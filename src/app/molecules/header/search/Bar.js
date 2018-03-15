const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('../../../app.scss');

// Atoms
const Input = require('../../../atoms/search/Input');
const Button = require('../../../atoms/search/Button');

class Bar extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <ul className={styles.menu}>
        <Input />
        <Button />
      </ul>
    );
  }
}
module.exports = Bar;