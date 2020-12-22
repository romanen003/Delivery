import React, { memo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { Button } from "../elements";
import style from './style.scss';
import { History } from 'history';

const cn = classNames.bind(style);

interface PropsType {
    history: History
}

export const MainPage = memo(({ history }: PropsType) => {
    const handleButtonClick = useCallback(() => {
        history.push('restaurant')
    },[ history.push ]);

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
});
