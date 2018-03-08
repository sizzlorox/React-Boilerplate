const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./styles/app.css');

const sideBarLeft = `${styles.aside} ${styles.asideLeft}`;
const sideBarRight = `${styles.aside} ${styles.asideRight}`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.header}>
          Welcome to this boilerplate!
        </h1>
        <p className={styles.main}>
          This is a React w/ Webpack, Express, NodeJS boilerplate.
        </p>
        <aside className={sideBarLeft}>Some sidebar info</aside>
        <aside className={sideBarRight}>Some more sidebar info</aside>
      </div>
    )
  }
}
module.exports = Home;