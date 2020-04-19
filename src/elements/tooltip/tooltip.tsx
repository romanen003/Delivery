import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '../';
import style from './tooltip.scss';

const cn = classNames.bind(style);

interface Props {
    text: string
}

export class Tooltip extends PureComponent<Props> {
    render () {
        return (
            <div className={cn('tooltip')} >
                <Text>{this.props.text}</Text>
            </div>
        )
    }
}
