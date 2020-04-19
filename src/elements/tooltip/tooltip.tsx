import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '../';
import './tooltip.scss';

interface Props {
    text: string
}

export class Tooltip extends PureComponent<Props> {
    render () {
        return (
            <div className={classNames('tooltip')} >
                <Text>{this.props.text}</Text>
            </div>
        )
    }
}
