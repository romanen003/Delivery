import React from 'react';
import classNames from 'classnames';
import './text.scss';

interface Prop {
    children?: string,
    heading?: boolean,
    title?: boolean,
    sub?: boolean,
    label?: boolean
}

export const Text = ({
    children,
    heading,
    label,
    title,
    sub
}: Prop) => {
    const styleText = classNames('text', {
        'text-heading': heading,
        'text-title': title,
        'text-sub': sub,
        'text-label': label,
    });

    return (
        <p className={styleText}>
            {children}
        </p>
    );
};
