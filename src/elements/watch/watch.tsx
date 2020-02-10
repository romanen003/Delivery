import React, { Component } from "react";
import classNames from 'classnames';
import { Grid, Text } from "../";
import './watch.scss';

const { Row, Col, T_Align, Col_Width } = Grid;

interface Props {}
interface State {
    hours: number,
    minutes: number
}
interface Data {[key: string]: any}

export class Watch extends Component<Props, State> {
    constructor(props: Props){
        super(props);

        this.currentDate = new Date();
        this.state = {
            hours: this.currentDate.getHours(),
            minutes: this.currentDate.getMinutes()
        };
    }
    componentDidMount(): void {
        this.timeout = setInterval(() => {
            this.currentDate = new Date();
            this.setState(() => ({
                hours: this.currentDate.getHours(),
                minutes: this.currentDate.getMinutes()
            }))
        }, 6000);
    }

    componentWillUnmount(): void {
        clearInterval(this.timeout)
    }

    timeout: any;
    currentDate: Data;

    render(){
        const {hours, minutes} = this.state;
        const correctHours = hours > 9 ? hours : `0${hours}`;
        const correctMinutes = minutes > 9 ? minutes : `0${minutes}`;

        return (
            <div className={classNames('watch')}>
                <Grid>
                    <Row>
                        <Col textAlign={T_Align.RIGHT} col={Col_Width.THIRTY} sticky>
                            <Text label>{correctHours}</Text>
                        </Col>
                        <Col sticky col={Col_Width.THIRTY}>
                            <Text label>:</Text>
                        </Col>
                        <Col textAlign={T_Align.LEFT} col={Col_Width.THIRTY} sticky>
                            <Text label>{correctMinutes}</Text>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
