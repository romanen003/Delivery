import React, { Component } from 'react';
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { Button, Grid, Input, ModalLayout } from "../../elements";
import { AUTHORIZATION, PLACEHOLDERS } from "./constants";
import style from  './authorization.scss';
import { authCheckActionSaga } from '../../store/authorization/action';

const cn = classNames.bind(style);
const { Row, Col, Margin, Col_Width } = Grid;

type Props = {
    auth: (data: {login: string, password: string}) => any
}
type State = {
    login: string,
    password: string,
    showError: boolean
}

interface IAuthorization {
    state: State,
    handleChangeLogin: (value: string) => void,
    handleChangePassword: (value: string) => void,
    handleCheckAuthorization: () => void
}

class AuthorizationContainer extends Component<Props, State> implements IAuthorization{
    state = {
        login: '',
        password: '',
        showError: false
    };

    handleChangeLogin = (value: string): void => this.setState({ login: value });

    handleChangePassword = (value: string): void => this.setState({ password: value });

    handleCheckAuthorization = (): void => {
        const { login, password } = this.state;
        const { auth } = this.props;

        auth({ login, password });
    };

    renderContentView = () => {
        const { login, password } = this.state;

        return (
            <div className={cn('authorization')}>
                <Grid>
                    <Row>
                        <Col>
                            <Input.Clear
                                value={login}
                                onChange={this.handleChangeLogin}
                                placeholder={PLACEHOLDERS.LOGIN}
                            />
                        </Col>
                    </Row>
                    <Row marginTop={Margin.X12}>
                        <Col>
                            <Input.Password
                                value={password}
                                onChange={this.handleChangePassword}
                                placeholder={PLACEHOLDERS.PASSWORD}
                            />
                        </Col>
                    </Row>
                    <Row marginTop={Margin.X16}>
                        <Col col={Col_Width.HALF}>
                            <Button
                                onClick={this.handleCheckAuthorization}
                            >
                                {PLACEHOLDERS.SUBMIT}
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    };

    render() {
        return (
            <ModalLayout
                label={AUTHORIZATION}
                contentView={this.renderContentView()}
            />
        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = {
    auth: authCheckActionSaga
};

export const Authorization = connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);
