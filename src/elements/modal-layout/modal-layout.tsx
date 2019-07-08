import React, {PureComponent, ReactElement} from 'react';
import classNames from 'classnames';
import {Button, Text, Grid} from '..';
import './modal-layout.scss';
import {connect} from "react-redux";
import {closeModal} from "../../store";

const {Row, Col, T_Align, Col_Width} = Grid;

interface Props {
    label?: string,
    closeModal?: (event: React.SyntheticEvent) => void,
    contentView?: ReactElement
}


@(connect(null, {
    closeModal
}) as any)
export class ModalLayout extends PureComponent<Props> {
    render() {
        const {
            label,
            closeModal = () => {},
            contentView
        } = this.props;
        return (
            <div className={classNames('modal-layout')}>
                <div className={classNames('modal-layout_header')}>
                    <Grid>
                        <Row>
                            <Col textAlign={T_Align.LEFT} col={Col_Width.SEVENTY} sticky>
                                <Text label>{label}</Text>
                            </Col>
                            <Col textAlign={T_Align.RIGHT} col={Col_Width.THIRTY} sticky>
                                <Button.Close onClick={closeModal} />
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className={classNames('modal-layout_content')}>
                    <div className={classNames('modal-layout_content-box')}>
                        {contentView}
                    </div>
                </div>
            </div>
        );
    }
}
