import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';
import './content-box.scss';

interface Props {
    paddingH?: string,
    paddingV?: string,
    padding?: string,
    color?: string,
    children?: ReactNode
}

const PADDING = {
    X4: '4px',
    X8: '8px',
    X12: '12px',
    X16: '16px',
    X20: '20px',
};

export class ContentBox extends Component<Props>{
    static Padding = PADDING;
    render() {
        const {
            padding,
            children
        } = this.props;
        const styleBox = classNames('content-box', {
            'content-box-padding-4px': padding === PADDING.X4,
            'content-box-padding-8px': padding === PADDING.X8,
            'content-box-padding-12px': padding === PADDING.X12,
            'content-box-padding-16px': padding === PADDING.X16,
            'content-box-padding-20px': padding === PADDING.X20,
        });

        return (
            <div className={styleBox}>
                {children}
            </div>
        );
    }
}
