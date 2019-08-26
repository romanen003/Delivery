import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink } from "react-router-dom";
import classNames from "classnames";
import {Button, Grid, Text, Watch} from '../../elements';
import {showModal} from '../../store';
import {StoreTypes} from "../../store/store-types";
import {Account} from '../';
import {AUTHORIZATION_MODAL_NAME} from "../authorization/constants";
import {getAuthorizationStatus} from "../../store/authorization/selectors";
import './header.scss';

const {Row, Col, Margin, Col_Width} = Grid;

interface Props {
    authorization?: boolean,
    setAuthorisation?: (value: boolean) => void,
    showModal?: (p: string) => void
}

@(connect(((store: StoreTypes) => ({
        authorization: getAuthorizationStatus(store)
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

        return (
            authorization
            ? <Account />
            : <Button onClick={this.handleAuthorClick}>
                    Authorisation
              </Button>
        )
    };

    render() {
        return (
            <div className={classNames('header')}>
                <Grid>
                    <Row margin={Margin.X16}>
                        <Col col={Col_Width.HALF}>
                            <NavLink  to="/" style={{textDecoration: 'none'}}>
                                <Text heading>
                                    Delivery
                                </Text>
                            </NavLink >
                        </Col>
                        <Col col={Col_Width.HALF}>
                            <Watch />
                            {this.renderRightSide()}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}