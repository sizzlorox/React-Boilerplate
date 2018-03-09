const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.css');

const sideBarLeft = `${styles.aside} ${styles.asideLeft}`;
const sideBarRight = `${styles.aside} ${styles.asideRight}`;

class About extends React.Component {
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
          About
        </h1>
        <p className={styles.main}>
          This is about the boilerplate. Testing routing
        </p>
        <aside className={sideBarLeft}>About sidebar 1</aside>
        <aside className={sideBarRight}>About sidebar 2</aside>
      </div>
    )
  }
}
module.exports = About;