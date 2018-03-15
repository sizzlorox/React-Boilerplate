const React = require('react');
const ReactDOM = require('react-dom');
const ReactLoading = require('react-loading');
const styles = require('../../app.css');

// Components
const Loading = require('../../components/loading/Loading');
const Navigation = require('../../molecules/navigation/Navigation');

const sideBarLeft = `${styles.aside} ${styles.asideLeft}`;
const sideBarRight = `${styles.aside} ${styles.asideRight}`;

class About extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
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
        <div>
          <Navigation />
          <h1>
            About
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi quis sem efficitur faucibus. Praesent faucibus egestas libero, et suscipit urna vehicula non. Ut vitae finibus odio, ut posuere leo. Duis finibus convallis quam vitae tempor. Fusce ac nisl euismod magna euismod scelerisque. Nullam in purus lacus. Ut sit amet risus viverra orci ultricies viverra. Duis et arcu consectetur risus condimentum mollis sed vitae enim. Donec eget venenatis arcu. Aliquam condimentum scelerisque odio ut lacinia. Cras eget justo vel magna blandit eleifend.
  Maecenas iaculis, leo placerat feugiat dapibus, ex mauris congue est, ac volutpat ipsum lectus efficitur nibh. In hac habitasse platea dictumst. Curabitur eget justo molestie, dictum libero ut, euismod ipsum. Nullam in sapien non est bibendum tempor quis sit amet mi. Sed porta tempor massa, eu rhoncus magna bibendum non. Quisque feugiat, nulla aliquam ultricies aliquet, velit velit auctor ipsum, blandit feugiat ex nulla sit amet odio. Curabitur finibus tincidunt metus a lacinia. Proin feugiat risus odio, eget congue elit porttitor a. Sed nec semper felis. Pellentesque molestie ante velit, ac tincidunt massa aliquet vel. Cras orci lectus, rhoncus ut gravida eu, venenatis in mauris. Aliquam ut eleifend neque. Morbi blandit euismod risus vitae interdum. Sed lobortis, augue ac pharetra commodo, purus ante aliquet tellus, eget dignissim mi ante sed quam. Fusce a nunc felis.
  Praesent vitae nisl quis ex aliquam tincidunt. Duis finibus accumsan euismod. Suspendisse tincidunt sit amet sem vitae interdum. Phasellus ut elit sed turpis sodales aliquet. Integer lacus magna, aliquet quis placerat quis, facilisis auctor nunc. Pellentesque mollis lectus sit amet lectus luctus, nec pretium tellus finibus. Pellentesque pulvinar luctus mi quis malesuada.
  Donec quis eleifend mauris. Duis imperdiet at magna nec luctus. Donec at aliquam nibh. Ut at mauris non diam semper ultricies eget quis turpis. Pellentesque vel augue vestibulum, varius elit ac, scelerisque odio. Etiam commodo lectus et libero semper viverra. Nam placerat dapibus risus, quis vehicula odio rutrum ut. Aenean pharetra porta neque, nec facilisis nulla. In lectus purus, pellentesque non feugiat ut, bibendum at risus. Morbi ullamcorper nibh sit amet sagittis fermentum. Curabitur nec risus malesuada, congue massa vitae, pretium ante.
  Aenean aliquet luctus turpis. Phasellus semper ut sapien ut dignissim. Fusce euismod nunc non sem finibus, sed ornare orci condimentum. Sed commodo bibendum lectus, ut mattis velit vestibulum et. Duis imperdiet porttitor eros eu rhoncus. Aliquam id urna congue, faucibus turpis vitae, consectetur tortor. Quisque vulputate eget magna nec pellentesque. Aliquam porta arcu ac vestibulum porttitor. Etiam elementum libero at dui dignissim, sit amet dapibus leo iaculis.
          </p>
          <aside>
            This is a side bar!<br /><br />
            Proin id quam a velit aliquam mollis non rutrum justo. Quisque gravida felis sit amet lectus hendrerit, auctor egestas nibh vehicula. Vivamus tempus tincidunt elit in consequat. Morbi nec massa bibendum, faucibus nibh in, maximus ex. Maecenas nec enim ut risus malesuada dapibus eget id quam. Donec porta neque justo, ut imperdiet metus lacinia rutrum. Ut tempus semper odio, a aliquam erat cursus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dignissim justo dolor, et ultrices neque suscipit et. Nunc aliquam, leo nec viverra vulputate, magna eros malesuada velit, sit amet gravida urna nulla vel mi. Vestibulum turpis enim, iaculis ac sem at, hendrerit pellentesque nunc. Fusce sit amet consectetur dui, eu molestie urna.
  Etiam mollis quis est vel ullamcorper. Praesent suscipit sem et augue laoreet, nec condimentum augue viverra. Nunc venenatis hendrerit dapibus. Nunc sed felis pharetra, pellentesque nunc at, pretium mauris. Aliquam leo lacus, sollicitudin eu pharetra ac, efficitur nec nunc. Suspendisse potenti. Donec elit lectus, consequat eu euismod in, blandit non nibh. Aenean sit amet dolor orci. Maecenas massa magna, interdum ac sodales at, tempus a diam. Sed tempus ipsum vitae tellus lacinia placerat. Pellentesque et diam vel nunc ornare commodo posuere id lorem. Nam eu dapibus diam.
          </aside>
          <aside>
            This is another side bar!<br /><br />
            Cras non purus neque. Fusce sit amet libero eget quam lacinia iaculis. Praesent sed pellentesque tellus. Quisque in odio vitae nisi commodo hendrerit vitae et justo. Sed tempus ut felis ac porta. Maecenas lacinia a justo et dignissim. Vestibulum vitae est eu eros tristique vestibulum. Quisque tellus nisi, pulvinar ut tristique et, posuere eu mi. Maecenas at leo aliquam, dignissim ante non, ultricies urna.
  Aliquam imperdiet, tellus non rhoncus elementum, ante lectus sollicitudin dolor, a facilisis nibh enim sagittis mi. Phasellus at convallis lorem. Suspendisse imperdiet nunc eget justo malesuada malesuada. Cras euismod, nibh eu ornare bibendum, magna dui congue lectus, sed pellentesque dui nisi et nunc. Suspendisse ornare enim lectus, eget consectetur lacus vulputate eu. In sollicitudin aliquet posuere. Ut mauris leo, bibendum at luctus et, efficitur in arcu. Vestibulum egestas lacus ligula, maximus maximus nisl condimentum sit amet. Integer sed tellus ullamcorper, egestas erat nec, interdum nulla. Nunc diam diam, blandit vitae ex eget, venenatis vulputate sem. Sed nec libero quis metus congue pulvinar. Nullam vitae arcu turpis. Curabitur ac erat erat. Ut fringilla eleifend orci, dapibus mollis justo pulvinar non. Mauris vitae dui eget sem vehicula laoreet.
  Duis fermentum, mi eget blandit blandit, turpis ex venenatis ligula, quis auctor leo ipsum a magna. Etiam sed porttitor velit. Praesent lacinia feugiat augue, nec lacinia risus aliquam in. Proin non ullamcorper eros. Nam a hendrerit augue. Morbi sed urna a nunc consequat interdum a sit amet neque. Duis elit magna, gravida sit amet sollicitudin ut, condimentum sit amet mi. Nunc ultrices ultrices purus, fringilla convallis est maximus eu. Nulla vulputate nunc eu dui scelerisque luctus. Donec ultrices velit id lectus egestas, sed ultrices lorem vulputate. Mauris id fringilla lectus, ut tempus lorem. Vivamus dignissim sollicitudin sem a ultricies. Mauris vitae condimentum quam, sed accumsan enim.
  Vestibulum tempor consectetur tellus quis dictum. Fusce eu pulvinar neque, quis vestibulum est. In pulvinar nunc ac lorem bibendum hendrerit. Nunc nec accumsan lacus. Praesent dapibus erat sit amet mauris sagittis condimentum. Vivamus sit amet ligula enim. Praesent vulputate rhoncus blandit. Nulla aliquam magna sed nisl facilisis tincidunt. Suspendisse porttitor lorem elit. Praesent consequat, sapien sed molestie posuere, tortor ligula egestas lectus, et pellentesque enim dolor nec justo. Duis venenatis, metus et finibus sodales, erat diam viverra est, ac sollicitudin ipsum dui ut ligula.
  Mauris augue felis, elementum eget molestie at, consectetur ac ex. Ut elementum quis massa vel vehicula. Maecenas ut turpis blandit, hendrerit neque vel, ornare metus. Vivamus quis fermentum leo, id condimentum enim. Pellentesque molestie in orci sed egestas. Duis malesuada fermentum sapien eu pulvinar. Donec facilisis nibh at est pretium semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet iaculis lorem in tempus. Sed sit amet elit in leo scelerisque pulvinar.
          </aside>
        </div>
      )
  }
}
module.exports = About;