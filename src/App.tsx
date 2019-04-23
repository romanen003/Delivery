import React, {Component} from 'react';
import {LayoutHome} from './elements';
import {Header} from "./components";


interface Props {
    setAuthorisation?: (value: boolean) => void
}

export class App extends Component<Props> {
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
