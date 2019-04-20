import React from 'react';
import classNames from 'classnames';
import './text.scss';

interface Prop {
    children?: string,
    style?: string
}

const STYLE = {};

export let Text: ({children}: Prop) => any;
Text = ({
    children,
    style
}) => {
    const styleText = classNames('text', {});

    return (
        <p className={styleText}>
            {children}
        </p>
    );
};
