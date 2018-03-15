const React = require('react');
const ReactDOM = require('react-dom');

class Title extends React.Component {
    // Should initialize state in constructor instead of getInitialState when using ES6 Classes
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    render() {
        return (
            <a className={this.props.className}>
                {this.props.children}
            </a>
        );
    }
}
module.exports = Title;