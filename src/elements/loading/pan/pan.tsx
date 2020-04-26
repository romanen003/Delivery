import React from 'react';
import classNames from 'classnames/bind';
import style from "./pan.scss";

const cn = classNames.bind(style);

export const Pan = () => (
    <div className={cn('pan-loader')}>
        <div className={cn('loader')} />
        <div className={cn('pan-container')}>
            <div className={cn('pan')} />
            <div className={cn('handle')} />
        </div>
        <div className={cn('shadow')} />
    </div>
);
