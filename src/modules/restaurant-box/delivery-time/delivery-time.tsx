import React from "react";
import classNames from 'classnames/bind';
import { Text } from "../../../elements";
import style from './delivery-time.scss';

const cn = classNames.bind(style);

interface Props {
    time: string
}

export const DeliveryTime = ({ time }:Props) => (
    <div className={cn('delivery-time')}>
        <Text>{time}</Text>
    </div>
);
