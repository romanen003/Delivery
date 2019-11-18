import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink } from "react-router-dom";
import classNames from "classnames";
import {Button, Grid, Text, Watch} from '../../elements';
import {showModal} from '../../store';
import {StoreTypes} from "../../store/store-types";
import {Account} from '../';
import {AUTHORIZATION_MODAL_NAME} from "../authorization/constants";
import {getAuthorizationStatusSelector} from "../../store/authorization/selectors";
import './header.scss';

const {Row, Col, Margin, Col_Width, T_Align} = Grid;

interface Props {
    authorization?: boolean,
    setAuthorisation?: (value: boolean) => void,
    showModal?: (name: string) => void
}

class HeaderContainer extends Component<Props> {
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
                        <Col col={Col_Width.THIRTY} textAlign={T_Align.LEFT}>
                            <NavLink  to="/" style={{textDecoration: 'none'}}>
                                <Text heading>Delivery</Text>
                            </NavLink >
                        </Col>
                        <Col col={Col_Width.SEVENTY} textAlign={T_Align.RIGHT}>
                            <Watch />
                            {this.renderRightSide()}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export const Header = connect((store: StoreTypes) => ({
    authorization: getAuthorizationStatusSelector(store)
}), {
    showModal
})(HeaderContainer);
