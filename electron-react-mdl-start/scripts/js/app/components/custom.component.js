import React from 'react';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';

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
            <div style={{}}>
                <Layout fixedHeader>
                    <Header title="Hello">
                        <Navigation>
                            <a href="">HeaderLink 1</a>
                            <a href="">HeaderLink 2</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Hello">
                        <Navigation>
                            <a href="">MenuLink 1</a>
                            <a href="">MenuLink 2</a>
                            <a href="">MenuLink 3</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <h1>Hello World!</h1>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default CustomComponent;