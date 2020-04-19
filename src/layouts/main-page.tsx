import React from "react";
import { connect } from "react-redux";
import classNames from 'classnames/bind';
import { Button } from "../elements";
import style from './style.scss';

const cn = classNames.bind(style);

interface Props {
    push: (value: string) => void
}

const MainPage = (props: Props) => {
    const handleButtonClick = () => props.push('restaurant');

    return (
        <div className={cn('mainLayout')}>
            <div className={cn('mainLayout__wrapper')}>
                <p className={cn('mainLayout__title')}>Delivery Food</p>
                <div className={cn('mainLayout__wrapper_btn')}>
                    <Button onClick={handleButtonClick}>to order</Button>
                </div>
            </div>
        </div>
    );
};

export const MainPageConnected = connect(null)(MainPage);
