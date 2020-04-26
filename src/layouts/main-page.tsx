import React from "react";
import classNames from 'classnames/bind';
import { Button } from "../elements";
import style from './style.scss';

const cn = classNames.bind(style);

interface Props {
    history: {
        push: (arg: string) => void
    }
}

export const MainPage = (props: Props) => {
    const { history  } = props;
    const handleButtonClick = () => history.push('restaurant');

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
