import React from 'react';
import classNames from 'classnames';
import './overlay.scss';

interface Props {
    children?: any,
    onClick?: () => void,
    style?: {[key: string]: any}
}

export const Overlay = ({
    children,
    onClick,
    style
}: Props) => {
    return (
        <div className={classNames('overlay')} onClick={onClick} style={style}>
            {children}
        </div>
    );
};
