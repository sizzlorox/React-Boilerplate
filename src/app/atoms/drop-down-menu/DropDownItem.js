const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('../../app.scss');
// const $ = require('jquery');

// Atoms
const Loading = require('../loading/Loading');

class DropDownItem extends React.Component {
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
    // $(document).foundation();
    console.log('Dropdownitem mounted');
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <li role='menuitem'>
          <Link to={this.props.url}>
            {this.props.children}
          </Link>
        </li>
      );
  }
}
module.exports = DropDownItem;