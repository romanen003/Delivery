import React, {Component} from 'react';
import classNames from "classnames";
import './authorization.scss';
import {Button, Grid, Input, ModalLayout} from "../../../elements";
import {AUTHORIZATION, PLACEHOLDERS} from "./constants";
import {connect} from "react-redux";
import {checkAuthorization} from "./actions";

const {Row, Col, Margin} = Grid;


interface Props {
    auth: (login: string, password: string) => any
}

@(connect(null, {
    auth: checkAuthorization
}) as any)
export class Authorization extends Component<Props> {
    state = {
        login: '',
        password: '',
        showError: false
    };

    handleChangeLogin = (value: string) => {
        this.setState(()=> ({
            login: value
        }))
    };

    handleChangePassword = (value: string) => {
        this.setState(()=> ({
            password: value
        }))
    };

    handleCheckAuthorization = () => {
        const {login, password} = this.state;
        this.props.auth(login, password);
    };


    renderContentView = () => {
        const {login, password} = this.state;

        return (
            <div className={classNames('authorization')}>
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
                            <Input.Clear
                                value={password}
                                onChange={this.handleChangePassword}
                                placeholder={PLACEHOLDERS.PASSWORD}
                            />
                        </Col>
                    </Row>
                    <Row marginTop={Margin.X16}>
                        <Col>
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
