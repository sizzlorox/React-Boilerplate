const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const Input = require('../../atoms/Input');
const Button = require('../../atoms/Button');

class Bar extends React.Component {
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
        <ul className={styles.menu}>
          <li>
            <Input type='search' placeholder='Search' />
          </li>
          <li>
            <Button type='button' className={styles.button}>
              Search
            </Button>
          </li>
        </ul>
      );
  }
}
module.exports = Bar;