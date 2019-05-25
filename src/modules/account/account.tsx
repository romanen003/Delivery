import React, {Component} from 'react';
import classNames from "classnames";
import {connect} from "react-redux";
import {MENU_ELEMENT} from "./constants";
import {Text} from '../../elements';
import './account.scss';

interface Props {

}

interface State {
    openedMenu: boolean
}

@(connect(null, {}) as any)
export class Account extends Component<Props, State> {
    state = {
        openedMenu: false
    };

    handleMouseEnter = () => {
        this.setState(()=>({openedMenu: true}))
    };

    handleMouseLeave = () => {
        this.setState(()=>({openedMenu: false}))
    };

    render() {
        const {openedMenu} = this.state;

        return (
            <div
                className={classNames('account')}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <Text title>Roman</Text>
                {openedMenu &&
                    <div className={classNames('account__menu')}>
                        {
                            MENU_ELEMENT.map((name, index) => (
                                <div
                                    className={classNames('account__element')}
                                    key={index}
                                >
                                    <Text sub>{name}</Text>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        );
    }
}
