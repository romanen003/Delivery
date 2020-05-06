import React, { Component } from 'react';
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { MENU_ELEMENT } from "./constants";
import { Text } from '../../elements';
import style from './account.scss';

const cn = classNames.bind(style);

type State =  { openedMenu: boolean }

interface type {
    state: State,
    handleMouseEnter: () => void,
    handleMouseLeave:() => void
}

class AccountComponent extends Component<{},State> implements type {
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
                    <ul className={cn('account__menu')}>
                        {
                            MENU_ELEMENT.map(name => (
                                <li
                                    className={cn('account__element')}
                                    key={name}
                                >
                                    <Text sub>{name}</Text>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        );
    }
}

export const Account = connect()(AccountComponent);
