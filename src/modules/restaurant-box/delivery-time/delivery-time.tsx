import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Text } from "../../../elements";
import style from './delivery-time.scss';

const cn = classNames.bind(style);

interface Props {
    time: string
}

export const DeliveryTime = memo(({ time }:Props) => (
    <div className={cn('delivery-time')}>
        <Text>{time}</Text>
    </div>
));
