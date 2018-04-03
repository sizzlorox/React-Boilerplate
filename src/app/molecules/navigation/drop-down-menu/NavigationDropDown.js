const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');
const styles = require('../../../app.scss');

// Atoms
const Loading = require('../../../atoms/loading/Loading');
const DropDownMenu = require('../../../atoms/drop-down-menu/DropDownMenu');
const DropDownSubject = require('../../../atoms/drop-down-menu/DropDownSubject');
const DropDownItem = require('../../../atoms/drop-down-menu/DropDownItem');

class NavigationDropDown extends React.Component {
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
        <div className={this.props.className}>
          <DropDownMenu>
            <DropDownSubject menuName='Account'>
              <DropDownItem url='/profile'>
                Profile
              </DropDownItem>
              <DropDownItem url='/settings'>
                Settings
              </DropDownItem>
            </DropDownSubject>
          </DropDownMenu>
        </div>
      );
  }
}
module.exports = NavigationDropDown;