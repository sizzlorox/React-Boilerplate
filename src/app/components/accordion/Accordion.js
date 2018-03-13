const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./accordion.css');

class Accordion extends React.Component {
    // Should initialize state in constructor instead of getInitialState when using ES6 Classes
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            isLoading: true,
            accordionClass: `${styles.accordion} ${styles.active}`,
            class: styles.panel,
            active: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.state.active
            ? this.setState({
                accordionClass: `${styles.accordion} ${styles.active}`,
                class: styles.panel,
                active: !this.state.active
            })
            :
            this.setState({
                accordionClass: `${styles.accordion}`,
                class: styles.panelBlock,
                active: !this.state.active
            });
    }

    render() {
        return (
            <div>
                <button className={this.state.accordionClass} onClick={this.handleClick}>
                    {this.props.title}
                </button>
                <div className={this.state.class}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
module.exports = Accordion;