import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';
import './content-box.scss';

interface Props {
    paddingH?: string,
    paddingV?: string,
    padding?: string,
    color?: string,
    children?: ReactNode,
    maxHeight?: boolean,
    background?: string
}

const PADDING = {
    X4: '4px',
    X8: '8px',
    X12: '12px',
    X16: '16px',
    X20: '20px',
};

const COLOR = {
    WHITE: 'WHITE'
};

export class ContentBox extends Component<Props>{
    static Padding = PADDING;
    static Color = COLOR;

    render() {
        const {
            padding,
            children,
            maxHeight = false,
            background
        } = this.props;
        const styleBox = classNames('content-box', {
            'content-box-padding-4px': padding === PADDING.X4,
            'content-box-padding-8px': padding === PADDING.X8,
            'content-box-padding-12px': padding === PADDING.X12,
            'content-box-padding-16px': padding === PADDING.X16,
            'content-box-padding-20px': padding === PADDING.X20,
            'content-box-max-height': maxHeight,
            'content-box-color-white': background === COLOR.WHITE
        });

        return (
            <div className={styleBox}>
                {children}
            </div>
        );
    }
}
