const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../loading/Loading');

class DropDownSubject extends React.Component {
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
        <li role='menuitem'>
          <a>
            {this.props.menuName}
          </a>
          <ul role='menu' className={`${styles.menu} ${styles.isDropdownSubmenu}`}>
            {this.props.children}
          </ul>
        </li>
      );
  }
}
module.exports = DropDownSubject;