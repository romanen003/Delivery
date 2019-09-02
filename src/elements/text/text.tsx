import React from 'react';
import classNames from 'classnames';
import './text.scss';

interface Prop {
    children?: string | number,
    heading?: boolean,
    title?: boolean,
    sub?: boolean,
    label?: boolean,
    black?: boolean
}

export const Text = ({
    children,
    heading,
    label,
    title,
    sub,
    black
}: Prop) => {
    const styleText = classNames('text', {
        'text-heading': heading,
        'text-title': title,
        'text-sub': sub,
        'text-label': label,
        'text-black': black
    });

    return (
        <p className={styleText}>
            {children}
        </p>
    );
};
