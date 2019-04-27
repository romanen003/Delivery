import React from 'react';
import classNames from 'classnames';
import './pan.scss';

export const Pan = () => {
    return (
        <div className={classNames('pan-loader')}>
            <div className={classNames('loader')} />
            <div className={classNames('pan-container')}>
                <div className={classNames('pan')} />
                <div className={classNames('handle')} />
            </div>
            <div className={classNames('shadow')} />
        </div>
    );
};
