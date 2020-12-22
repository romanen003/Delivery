import React, { memo } from 'react';
import classNames from "classnames/bind";
import style from './rating.scss';

const cn = classNames.bind(style);

interface Props {
    rating: string | number
}

export const Rating = memo(({ rating }: Props) => (
    <div className={cn('rating')}>
        <span className={cn('rating__star')} />
        <span className={cn('rating__number')}>{rating}</span>
    </div>
));
