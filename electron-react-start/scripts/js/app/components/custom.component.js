import React from 'react';

class CustomComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }
    
    componentWillMount() {
        console.log("WillMount");
    }

    componentDidMount() {
        console.log("DidMount");
    }

    // Other Lifecycle methods; http://reactcheatsheet.com/

    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default CustomComponent;