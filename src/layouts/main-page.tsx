import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import classNames from "classnames";
import { Button } from "../elements";
import './style.scss';

interface Props {
    push: (value: string) => any
}

const MainPage = (props: Props) => {
    const handleButtonClick = () => props.push('restaurant');

    return (
        <div className={classNames('mainLayout')}>
            <div className={classNames('mainLayout__wrapper')}>
                <p className={classNames('mainLayout__title')}>Delivery Food</p>
                <div className={classNames('mainLayout__wrapper-btn')}>
                    <Button onClick={handleButtonClick}>to order</Button>
                </div>

            </div>
        </div>
    );
};

export const MainPageConnected = connect(
    () => ({}),
    { push }
)(MainPage);
