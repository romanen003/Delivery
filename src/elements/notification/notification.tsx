import React, {Component} from 'react';
import {Grid, Text, Button} from '../';
import classNames from 'classnames';
import {TYPES} from './constants';
import './notification.scss';

const {Row, Col, T_Align, Margin_Top} = Grid;

interface Props {
    id?: number,
    type: string,
    title: string,
    description?: string,
    lifeTime: number,
    onClose: (id: number) => void
}


export class Notification extends Component<Props> {
    constructor(props: Props){
        super(props);

        this.lifeCycle = props.lifeTime;
    }

    lifeCycle: any;

    static TypesNotification = TYPES;

    componentDidMount(): void {
        const {
            lifeTime,
            id = -1,
            onClose
        } = this.props;
        this.lifeCycle = setTimeout(() => {
            onClose(id)
        }, lifeTime)
    }

    handleCloseClick = () => {
        const {
            onClose,
            id = -1
        } = this.props;
        clearTimeout(this.lifeCycle);
        onClose(id);
    };

    render () {
        const {
            type,
            title,
            description
        } = this.props;
        const StyleNotification = classNames('notification', {
            'notification-success': type === TYPES.SUCCESS,
            'notification-warning': type === TYPES.WARNING,
            'notification-error': type === TYPES.ERROR
        });

        return (
            <div className={StyleNotification}>
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
