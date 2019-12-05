import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import './col.scss';
import { COL, MARGIN_TOP, T_ALIGN, V_ALIGN } from "../constants";

interface Props {
    children?: ReactNode,
    textAlign?: string,
    vertAlign?: string,
    col?: string,
    sticky?: boolean,
    marginT?: string
}

export class Col extends Component<Props> {
    render() {
        let {
            children,
            textAlign,
            vertAlign,
            col,
            sticky = false,
            marginT
        } = this.props;
        const rowClassName = classNames(
            'col', {
                'col_t-align-left': textAlign === T_ALIGN.LEFT,
                'col_t-align-right': textAlign === T_ALIGN.RIGHT,
                'col_v-align-top': vertAlign === V_ALIGN.TOP,
                'col_v-align-bottom': vertAlign === V_ALIGN.BOTTOM,
                'col_col-quarter': col === COL.QUARTER,
                'col_col-seventy': col === COL.SEVENTY,
                'col_col-thirty': col === COL.THIRTY,
                'col_col-half': col === COL.HALF,
                'col_no-padding': sticky,
                'col_margin-t8': marginT === MARGIN_TOP.X8,
                'col_margin-t16': marginT === MARGIN_TOP.X16
            }
        );

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
