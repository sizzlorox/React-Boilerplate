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
    console.log(styles.logo);
  }

  render() {
    return (
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <ul className={styles.menu}>
            <a className={styles.logo} href='/'>
              <img src="https://placehold.it/64x32"></img>
            </a>
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