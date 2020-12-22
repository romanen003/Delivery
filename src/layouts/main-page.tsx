import React, { memo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { Button, Typography } from '@material-ui/core';
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
                <div className={cn('mainLayout__title')}>
                    <Typography variant="h2">Delivery Food</Typography>
                </div>
                <div className={cn('mainLayout__wrapper_btn')}>
                    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
                        to order
                    </Button>
                </div>
            </div>
        </div>
    );
});
