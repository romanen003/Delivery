import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Row } from "./row/row";
import { Col } from "./col/col";
import { COL, MARGIN, MARGIN_TOP, T_ALIGN, V_ALIGN } from "./constants";
import style from './grid.scss';

const cn = classNames.bind(style);

interface Props {
    children: React.ReactNode
}

export class Grid extends Component<Props> {
    static Row = Row;
    static Col = Col;
    static Margin_Top = MARGIN_TOP;
    static Margin = MARGIN;
    static T_Align = T_ALIGN;
    static V_Align = V_ALIGN;
    static Col_Width = COL;

    render() {
        const { children } = this.props;

        return (
            <div className={cn('grid')}>
                {children}
            </div>
        )
    }
}
