import React, {Component} from 'react';
import classNames from "classnames";
import './account.scss';
import {connect} from "react-redux";
import {MENU_ELEMENT} from "./constants";

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
                <h3 className={classNames('account__name')}>Roman</h3>
                {openedMenu &&
                    <div className={classNames('account__menu')}>
                        {
                            MENU_ELEMENT.map((name, index) => (
                                <div
                                    className={classNames('account__element')}
                                    key={index}
                                >
                                    {name}
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        );
    }
}
