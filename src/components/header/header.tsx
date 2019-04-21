import React, {Component} from 'react';
import {Button, Grid, ModalLayout, Text} from '../../elements';
import {connect} from "react-redux";
import {setAuthorisation, showModal} from '../../store';
import {StoreTypes} from "../../store/store-types";


const {Row, Col, Margin, T_Align} = Grid;

interface Props {
    authorization?: boolean,
    setAuthorisation?: (value: boolean) => void,
    showModal?: (p: string) => void
}

export const Componenttest = () => (
    <ModalLayout
        label='fsdfsdfsdfsdfdsfsdfdssddfsdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdffsdf'
    >
        <div>dsfdsfdsfdsf</div>
    </ModalLayout>

);

export const modalTest = {
    name: 'TEST_MODAL',
    Component: Componenttest,
    view: "CENTER",
    config: {
        onClick: () => {}
    }
};


@(connect((({authorization}: StoreTypes) => ({
        authorization: authorization.authorization
    })), {
    setAuthorisation,
    showModal
}) as any)
export class Header extends Component<Props> {
    handleAuthorClick = () => {
        const {
            setAuthorisation = () => {},
            showModal = () => {}
        } = this.props;

        setAuthorisation(true);
        showModal(modalTest.name)
    };

    renderRightSide = () => {
        const {authorization} = this.props;

        return (authorization
        ? <div>Мой профиль</div>
        : <Button onClick={this.handleAuthorClick}>
                Authorisation
          </Button>)
    };

    render() {
        return (
            <header>
                <Grid>
                    <Row margin={Margin.X16}>
                        <Col textAlign={T_Align.LEFT}>
                            <Text>Delivery</Text>
                        </Col>
                        <Col>
                            {this.renderRightSide()}
                        </Col>
                    </Row>
                </Grid>
            </header>
        )
    }
}
