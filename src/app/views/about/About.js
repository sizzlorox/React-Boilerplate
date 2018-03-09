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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi quis sem efficitur faucibus. Praesent faucibus egestas libero, et suscipit urna vehicula non. Ut vitae finibus odio, ut posuere leo. Duis finibus convallis quam vitae tempor. Fusce ac nisl euismod magna euismod scelerisque. Nullam in purus lacus. Ut sit amet risus viverra orci ultricies viverra. Duis et arcu consectetur risus condimentum mollis sed vitae enim. Donec eget venenatis arcu. Aliquam condimentum scelerisque odio ut lacinia. Cras eget justo vel magna blandit eleifend.
  Maecenas iaculis, leo placerat feugiat dapibus, ex mauris congue est, ac volutpat ipsum lectus efficitur nibh. In hac habitasse platea dictumst. Curabitur eget justo molestie, dictum libero ut, euismod ipsum. Nullam in sapien non est bibendum tempor quis sit amet mi. Sed porta tempor massa, eu rhoncus magna bibendum non. Quisque feugiat, nulla aliquam ultricies aliquet, velit velit auctor ipsum, blandit feugiat ex nulla sit amet odio. Curabitur finibus tincidunt metus a lacinia. Proin feugiat risus odio, eget congue elit porttitor a. Sed nec semper felis. Pellentesque molestie ante velit, ac tincidunt massa aliquet vel. Cras orci lectus, rhoncus ut gravida eu, venenatis in mauris. Aliquam ut eleifend neque. Morbi blandit euismod risus vitae interdum. Sed lobortis, augue ac pharetra commodo, purus ante aliquet tellus, eget dignissim mi ante sed quam. Fusce a nunc felis.
  Praesent vitae nisl quis ex aliquam tincidunt. Duis finibus accumsan euismod. Suspendisse tincidunt sit amet sem vitae interdum. Phasellus ut elit sed turpis sodales aliquet. Integer lacus magna, aliquet quis placerat quis, facilisis auctor nunc. Pellentesque mollis lectus sit amet lectus luctus, nec pretium tellus finibus. Pellentesque pulvinar luctus mi quis malesuada.
  Donec quis eleifend mauris. Duis imperdiet at magna nec luctus. Donec at aliquam nibh. Ut at mauris non diam semper ultricies eget quis turpis. Pellentesque vel augue vestibulum, varius elit ac, scelerisque odio. Etiam commodo lectus et libero semper viverra. Nam placerat dapibus risus, quis vehicula odio rutrum ut. Aenean pharetra porta neque, nec facilisis nulla. In lectus purus, pellentesque non feugiat ut, bibendum at risus. Morbi ullamcorper nibh sit amet sagittis fermentum. Curabitur nec risus malesuada, congue massa vitae, pretium ante.
  Aenean aliquet luctus turpis. Phasellus semper ut sapien ut dignissim. Fusce euismod nunc non sem finibus, sed ornare orci condimentum. Sed commodo bibendum lectus, ut mattis velit vestibulum et. Duis imperdiet porttitor eros eu rhoncus. Aliquam id urna congue, faucibus turpis vitae, consectetur tortor. Quisque vulputate eget magna nec pellentesque. Aliquam porta arcu ac vestibulum porttitor. Etiam elementum libero at dui dignissim, sit amet dapibus leo iaculis.
        </p>
          <aside className={sideBarLeft}>About sidebar 1</aside>
          <aside className={sideBarRight}>About sidebar 2</aside>
        </div>
      )
  }
}
module.exports = About;