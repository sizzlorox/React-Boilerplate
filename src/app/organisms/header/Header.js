const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Molecules
const NavigationMolecule = require('../../molecules/navigation/Navigation');
const SearchBar = require('../../molecules/search/Bar');

class Header extends React.Component {
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
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <ul className={styles.menu}>
            <li className={styles.menuText}>
              BoilerPlate
            </li>
            <NavigationMolecule />
          </ul>
        </div>
        <div className={styles.topBarMenuRight}>
          <SearchBar />
        </div>
      </div>
    )
  }
}
module.exports = Header;