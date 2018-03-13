const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../components/accordion/accordion.css');

// Components
const Accordion = require('../../components/accordion/Accordion');

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarLeft = `${this.props.styles.aside} ${this.props.styles.asideLeft}`;
    this.sideBarRight = `${this.props.styles.aside} ${this.props.styles.asideRight}`;
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <div className={this.props.styles.wrapper}>
        <h1 className={this.props.styles.header}>
          FAQ
        </h1>
        <div className={this.props.styles.main}>
          <Accordion title='What is the point of this boilerplate?'>
            This boilerplate is to learn on how to use React while reaching out to others to contribute their knowledge on efficiently and cleanly utilizing ReactJS
          </Accordion>
          <Accordion title='Why are you doing this?'>
            To learn and also to help others.
          </Accordion>
          <Accordion title='Is there anything I can do to help?'>
            Contribute what you know about React!
          </Accordion>
        </div>
        <aside className={this.sideBarLeft}>Some sidebar info</aside>
        <aside className={this.sideBarRight}>Some more sidebar info</aside>
      </div>
    )
  }
}
module.exports = Faq;