import React, {Component} from 'react';
import {LayoutHome} from "../elements";
import {Header} from "../components";

export class MyAccountPage extends Component {

    render() {
        return (
            <LayoutHome
                headerView={<Header/>}
            />
        );
    }
}
