import React, { memo } from 'react';
import classNames from 'classnames/bind';
import style from './delivery-time.scss';
import { Typography } from '@material-ui/core';

const cn = classNames.bind(style);

interface PropsType {
    time: string
}

export const DeliveryTime = memo(({ time }:PropsType) => (
    <div className={cn('delivery-time')}>
        <Typography variant='subtitle2'>{time}</Typography>
    </div>
));
