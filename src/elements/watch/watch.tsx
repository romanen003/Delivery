import React, {Component} from "react";
import classNames from 'classnames';
import {Grid, Text} from "../";
import './watch.scss';

const {Row, Col,T_Align} = Grid;

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

        return (
            <div className={classNames('watch')}>
                <Grid>
                    <Row>
                        <Col>
                            <Text sub> City</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col textAlign={T_Align.RIGHT}>
                            <Text label>{hours}</Text>
                        </Col>
                        <Col>
                            <Text label>:</Text>
                        </Col>
                        <Col textAlign={T_Align.LEFT}>
                            <Text label>{minutes}</Text>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
