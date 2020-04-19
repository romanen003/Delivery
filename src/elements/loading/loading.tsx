import React from 'react';
import classNames from 'classnames';
import './loading.scss';
import { Pan } from "./pan/pan";

interface Props {
    pan?: boolean
}

export const Loading = ({
    pan = true
}: Props) => (
    <div className={classNames('loading')}>
        {pan && <Pan />}
    </div>
);
