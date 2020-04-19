import React, { Component } from 'react';
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { MENU_ELEMENT } from "./constants";
import { Text } from '../../elements';
import style from './account.scss';

const cn = classNames.bind(style);

interface Props {

}

interface State {
    openedMenu: boolean
}

class AccountComponent extends Component<Props, State> {
    state = {
        openedMenu: false
    };

    handleMouseEnter = () => {
        this.setState(()=>({ openedMenu: true }))
    };

    handleMouseLeave = () => {
        this.setState(()=>({ openedMenu: false }))
    };

    render() {
        const { openedMenu } = this.state;

        return (
            <div
                className={cn('account')}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <Text title>Roman</Text>
                {openedMenu &&
                    <div className={cn('account__menu')}>
                        {
                            MENU_ELEMENT.map(name => (
                                <div
                                    className={cn('account__element')}
                                    key={name}
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

export const Account = connect()(AccountComponent);
