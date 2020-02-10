import React, {Component} from 'react';
import classNames from 'classnames';
import { Row } from "./row/row";
import { Col } from "./col/col";
import './grid.scss';
import { COL, MARGIN, MARGIN_TOP, T_ALIGN, V_ALIGN } from "./constants";

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
        const {
            children
        } = this.props;
        const StyleGrid = classNames('grid');

        return (
            <div className={StyleGrid}>
                {children}
            </div>
        )
    }
}
