import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {Button, Grid, Text} from '../../elements';
import {showModal} from '../../store';
import {StoreTypes} from "../../store/store-types";
import './header.scss';
import {Account} from '../';
import {AUTHORIZATION_MODAL_NAME} from "../authorization/constants";


const {Row, Col, Margin} = Grid;


interface Props {
    authorization?: boolean,
    setAuthorisation?: (value: boolean) => void,
    showModal?: (p: string) => void
}

@(connect((({authorization}: StoreTypes) => ({
        authorization: authorization.authorization
    })), {
    showModal
}) as any)
export class Header extends Component<Props> {
    handleAuthorClick = () => {
        const {
            showModal = () => {}
        } = this.props;

        showModal(AUTHORIZATION_MODAL_NAME)
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
                            <Text heading>Delivery</Text>
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
