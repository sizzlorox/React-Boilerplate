const React = require('react');
const ReactDOM = require('react-dom');
const ReactLoading = require('react-loading');
const styles = require('../../app.css');

// Components
const Loading = require('../../components/loading/Loading');

const sideBarLeft = `${styles.aside} ${styles.asideLeft}`;
const sideBarRight = `${styles.aside} ${styles.asideRight}`;

class About extends React.Component {
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar',
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