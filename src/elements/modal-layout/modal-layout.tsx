import React, { PureComponent, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { Button, Text, Grid } from '..';
import style from './modal-layout.scss';
import { connect } from "react-redux";
import { closeModal } from "../../store";

const cn = classNames.bind(style);

const { Row, Col, T_Align, Col_Width } = Grid;

interface Props {
    label?: string,
    closeModal?: (event: React.SyntheticEvent) => void,
    contentView?: ReactElement
}


export class ModalLayoutC extends PureComponent<Props> {
    render() {
        const {
            label,
            closeModal = () => {},
            contentView
        } = this.props;
        return (
            <div className={cn('modal-layout')}>
                <div className={cn('modal-layout_header')}>
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
                <div className={cn('modal-layout_content')}>
                    <div className={cn('modal-layout_content-box')}>
                        {contentView}
                    </div>
                </div>
            </div>
        );
    }
}
export const ModalLayout = connect(null, { closeModal })(ModalLayoutC);
