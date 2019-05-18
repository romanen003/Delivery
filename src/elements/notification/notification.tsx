import React, {Component} from 'react';
import {Grid, Text, Button} from '../';
import classNames from 'classnames';
import './notification.scss';

const {Row, Col, T_Align, Margin_Top} = Grid;

interface Props {
    id?: number | null,
    type: string,
    title: string,
    description: string,
    lifeTime: number,
    onClose?: (id: number | null) => void
}

export class Notification extends Component<Props> {
    handleCloseClick = () => {
        const {onClose, id = null} = this.props;

        if (onClose) {
            onClose(id)
        }
    };

    render () {
        const {
            type,
            title,
            description
        } = this.props;

        return (
            <div className={classNames('notification')}>
                <Grid>
                    <Row>
                        <Col textAlign={T_Align.LEFT}>
                            <Text title>{title}</Text>
                        </Col>
                    </Row>
                    <Row marginTop={Margin_Top.X8}>
                        <Col textAlign={T_Align.LEFT}>
                            <Text sub>{description}</Text>
                        </Col>
                    </Row>
                </Grid>
                <div className={classNames('notification__close')}>
                    <Button.Close onClick={this.handleCloseClick}/>
                </div>
            </div>
        )
    }
}