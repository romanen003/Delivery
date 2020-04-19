import React from 'react';
import classNames from 'classnames/bind';
import { Pan } from "./pan/pan";
import style from './loading.scss';

const cn = classNames.bind(style);

interface Props {
    pan?: boolean
}

export const Loading = ({
    pan = true
}: Props) => (
    <div className={cn('loading')}>
        {pan && <Pan />}
    </div>
);
