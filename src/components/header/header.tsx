import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {Button, Grid, ModalLayout, Text} from '../../elements';
import {setAuthorisation, showModal} from '../../store';
import {StoreTypes} from "../../store/store-types";
import {registerModal} from "../modals/register-modals";
import './header.scss';
import {Account} from '../account/account';


const {Row, Col, Margin, T_Align} = Grid;

export const Componenttest = () => (
    <ModalLayout
        label='fsdfsdfsdfsdfdsfsdfdssddfsdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdffsdf'
        contentView={<div>dsfdsfdsfdsf</div>}
    />
);
export const modalTest = {
    name: 'TEST_MODAL',
    Component: Componenttest,
    view: "RIGHT",
    config: {
        onClick: () => {}
    }
};
registerModal(modalTest);



interface Props {
    authorization?: boolean,
    setAuthorisation?: (value: boolean) => void,
    showModal?: (p: string) => void
}

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
        ? <Account />
        : <Button onClick={this.handleAuthorClick}>
                Authorisation
          </Button>)
    };

    render() {
        return (
            <header className={classNames('header')}>
                <Grid>
                    <Row margin={Margin.X16}>
                        <Col>
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
