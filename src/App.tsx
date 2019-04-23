import React, {Component} from 'react';
import {LayoutHome} from './elements';
import {Header} from "./components";


interface Props {
    setAuthorisation?: (value: boolean) => void
}

export class App extends Component<Props> {
    // componentDidMount() {
    //     fetch('/api/get-users')
    //         .then(res => res.json())
    //         .then(res => console.log('res', res));
    // };

    renderView = () => (
        <Header/>
    );

    render () {

        return (
            <LayoutHome
                headerView={this.renderView()}
            />
        );
    }
}
