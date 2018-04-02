const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../loading/Loading');

class DropDownMenu extends React.Component {
    // Should initialize state in constructor instead of getInitialState when using ES6 Classes
    constructor(props) {
        super(props);
        this.state = {
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
                <ul role='menubar' className={`${styles.dropdown} ${styles.menu}`} data-dropdown-menu>
                    {this.props.children}
                </ul>
            );
    }
}
module.exports = DropDownMenu;