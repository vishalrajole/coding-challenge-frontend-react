import React from 'react';
import { Error } from './errorBoundary.style';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, info: null };
    }

    componentDidCatch(error, info) {
        this.setState({ error, info })
    }

    render() {
        if (this.state.info) {
            return <Error>Oops, something went wrong!</Error>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
