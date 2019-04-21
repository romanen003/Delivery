import React, {PureComponent, ReactElement} from 'react';
import classNames from 'classnames';
import {Button, Text, Grid} from '..';
import './modal-layout.scss';

const {Row, Col, T_Align, Col_Width} = Grid;

interface Props {
    label?: string,
    onClick?: (event: React.SyntheticEvent) => void,
    contentView?: ReactElement
}


export class ModalLayout extends PureComponent<Props> {
    render() {
        const {
            label,
            onClick = () => {},
            contentView
        } = this.props;
        return (
            <div className={classNames('modal-layout')}>
                <Grid>
                    <Row>
                        <Col textAlign={T_Align.LEFT} col={Col_Width.SEVENTY} sticky>
                            <Text>{label}</Text>
                        </Col>
                        <Col textAlign={T_Align.RIGHT} col={Col_Width.THIRTY} sticky>
                            <Button.Close onClick={onClick}/>
                        </Col>
                    </Row>
                </Grid>
                <div className={classNames('modal-layout_content')}>
                    <div className={classNames('modal-layout_content-box')}>
                        {contentView}
                    </div>
                </div>
            </div>
        );
    }
}
