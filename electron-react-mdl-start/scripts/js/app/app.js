import React from 'react';
import ReactDOM from 'react-dom';

import CustomComponent from './components/custom.component'

class App extends React.Component {
    render() {
        return (
            <div>
                <CustomComponent />
            </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));