import React from 'react';
import classNames from 'classnames/bind';
import './pan.scss';

export const Pan = () => (
    <div className={classNames('pan-loader')}>
        <div className={classNames('loader')} />
        <div className={classNames('pan-container')}>
            <div className={classNames('pan')} />
            <div className={classNames('handle')} />
        </div>
        <div className={classNames('shadow')} />
    </div>
);
