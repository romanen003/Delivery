import React from "react";
import classNames from "classnames";
import './rating.scss';

interface Props {
    rating: string | number
}

export const Rating = ({ rating }: Props) => (
    <div className={classNames('rating')}>
        <span className={classNames('rating__star')} />
        <span className={classNames('rating__number')}>{rating}</span>
    </div>
);
