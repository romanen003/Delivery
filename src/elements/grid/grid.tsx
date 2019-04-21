import React, {Component} from 'react';
import classNames from 'classnames';
import {MARGIN_TOP, MARGIN, Row} from "./row/row";
import {Col, T_ALIGN, V_ALIGN, COL} from "./col/col";
import './grid.scss';

interface Props {
    children: React.ReactNode,
    sticky?: boolean
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
        const {
            children,
            sticky = false
        } = this.props;
        const StyleGrid = classNames('grid');

        return (
            <div className={StyleGrid}>
                {children}
            </div>
        )
    }
}
