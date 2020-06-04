import React from 'react'

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'

class ErrorBoundary extends React.Component {

    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {

        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i1.wp.com/www.msnoob.com/wp-content/uploads/2018/12/error-404.jpg?fit=1000%2C938&ssl=1" />
                    <ErrorImageText> Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )

        }

        return this.props.children;
    }
}

export default ErrorBoundary;