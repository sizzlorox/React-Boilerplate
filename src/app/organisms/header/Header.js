const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Molecules
const Logo = require('../../atoms/navigation/Logo');
const Title = require('../../atoms/navigation/Title');
const Navigation = require('../../molecules/navigation/Navigation');
// const SearchBar = require('../../molecules/search/Bar');
const NavigationDropDown = require('../../molecules/navigation/drop-down-menu/NavigationDropDown');

class Header extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
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
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <ul className={`${styles.menu}`}>
              <Title>
                Boilerplate
              </Title>
              <Navigation />
            </ul>
          </div>
          <NavigationDropDown className={styles.topBarRight} />
        </div>
      )
  }
}
module.exports = Header;