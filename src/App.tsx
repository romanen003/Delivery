import React, {Component} from 'react';
import {Input, Button, Grid, LayoutHome} from './elements';
import {connect} from "react-redux";
import {setAuthorisation} from './store/authorization/action';


const {Row, Col, Col_Width}: any = Grid;

interface Props {
    setAuthorisation?: (value: boolean) => void
}

interface State {
    value: string
}


class AppComponent extends Component<Props, State>{
    state = {
        value: ''
    };

    handleClear = (value: string): void => {
        this.setState(() => ({value}))
    };

    handleClick = () => {
        const {
            setAuthorisation = () => {}
        } = this.props;

        setAuthorisation(true)
    };

    componentDidMount() {
        const {
            setAuthorisation = () => {}
        } = this.props;

        fetch('/api/get-users')
            .then(res => res.json())
            .then(res => setAuthorisation(true))
            .then(res => console.log('res', res));
    };

    renderView = () => (
        <Grid>
            <Row>
                <Col col={Col_Width.QUARTER}>
                    <Input.Clear
                        onChange={this.handleClear}
                        value={this.state.value}
                    />
                </Col>
                <Col>
                    <Button.Edit
                        onClick={this.handleClick}
                    />
                </Col>
            </Row>
        </Grid>
    );

    render () {
        return (
            <LayoutHome
                headerView={this.renderView()}
                contentView={this.renderView()}
                footerView={this.renderView()}
            />

        );
    }
}

export const App = connect((state => ({
    state
})),{
    setAuthorisation
})(AppComponent);
