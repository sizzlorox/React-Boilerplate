const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Molecules
const Logo = require('../../atoms/header/Logo');
const Title = require('../../atoms/header/Title');
const NavigationMolecule = require('../../molecules/header/navigation/Navigation');
const SearchBar = require('../../molecules/header/search/Bar');

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
            <Logo imageUrl='https://placehold.it/64x32' />
            <Title>
              Boilerplate
            </Title>
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