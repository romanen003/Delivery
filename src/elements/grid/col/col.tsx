import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';
import './col.scss';

interface Props {
    children?:ReactNode,
    textAlign?: string,
    vertAlign?: string,
    col?: string
}

export const T_ALIGN = {
    LEFT: 'left',
    RIGHT: 'right'
};

export const V_ALIGN = {
    TOP: 'top',
    BOTTOM: 'bottom'
};

export const COL = {
    QUARTER: "25",
    THIRTY: "30",
    HALF: "50",
    SEVENTY: "70",
};

export class Col extends Component<Props> {
    render() {
        const {
            children,
            textAlign,
            vertAlign,
            col
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
            }
        );

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
