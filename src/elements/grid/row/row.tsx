import React, { Component, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { MARGIN, MARGIN_TOP, V_ALIGN, POSITION } from "../constants";
import style from './row.scss';

const cn = classNames.bind(style);

type Props = {
    children?: ReactNode,
    marginTop?: string,
    margin?: string,
    vertAlign?: V_ALIGN,
    position? : POSITION
}

export class Row extends Component<Props> {
    render() {
        const {
            children,
            marginTop,
            margin,
            vertAlign,
            position
        } = this.props;
        const rowClassName = cn('row',{
            'row__margin-top-4': marginTop === MARGIN_TOP.X4,
            'row__margin-top-8': marginTop === MARGIN_TOP.X8,
            'row__margin-top-12': marginTop === MARGIN_TOP.X12,
            'row__margin-top-16': marginTop === MARGIN_TOP.X16,
            'row__margin-4': margin === MARGIN.X4,
            'row__margin-8': margin === MARGIN.X8,
            'row__margin-12': margin === MARGIN.X12,
            'row__margin-16': margin === MARGIN.X16,
            'row__vert-align-top': vertAlign === V_ALIGN.TOP,
            'row__vert-align-bottom': vertAlign === V_ALIGN.BOTTOM,
            'row__center': position === POSITION.CENTER
        });

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
