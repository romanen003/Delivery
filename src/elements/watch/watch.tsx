import React, { Component } from "react";
import classNames from 'classnames/bind';
import { Text } from "../";
import style from './watch.scss';

const cn = classNames.bind(style);

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
        const { hours, minutes } = this.state;
        const correctHours = hours > 9 ? hours : `0${hours}`;
        const correctMinutes = minutes > 9 ? minutes : `0${minutes}`;

        return (
            <div className={cn('watch')}>
                <Text label>{correctHours}</Text>
                <Text label>:</Text>
                <Text label>{correctMinutes}</Text>
            </div>
        )
    }
}
