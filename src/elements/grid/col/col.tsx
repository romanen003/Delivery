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
        const rowClassName = classNames('col', {
            'col__t-align-left': textAlign === T_ALIGN.LEFT,
            'col__t-align-right': textAlign === T_ALIGN.RIGHT,
            'col__v-align-top': vertAlign === V_ALIGN.TOP,
            'col__v-align-bottom': vertAlign === V_ALIGN.BOTTOM,
            'col__quarter': col === COL.QUARTER,
            'col__seventy': col === COL.SEVENTY,
            'col__thirty': col === COL.THIRTY,
            'col__half': col === COL.HALF,
            'col__no-padding': sticky,
            'col__margin-t8': marginT === MARGIN_TOP.X8,
            'col__margin-t16': marginT === MARGIN_TOP.X16
        });

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
