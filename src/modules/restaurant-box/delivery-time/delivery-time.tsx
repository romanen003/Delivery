import React from "react";
import classNames from 'classnames';
import { Text } from "../../../elements";
import './delivery-time.scss';

interface Props {
    time: string
}

export const DeliveryTime = ({ time }:Props) => (
    <div className={classNames('delivery-time')}>
        <Text>{time}</Text>
    </div>
);
