import React from 'react';
import classNames from 'classnames/bind';
import style from './overlay.scss';

const cn = classNames.bind(style);

interface Props {
    children?: any,
    onClick?: () => void,
    style?: {[key: string]: any}
}

export const Overlay = ({
    children,
    onClick,
    style
}: Props) => (
    <div className={cn('overlay')} onClick={onClick} style={style}>
        {children}
    </div>
);
