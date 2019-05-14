import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {StoreTypes} from "../../store/store-types";
import {notificationSelector} from '../../store/notification/selectors';
import {Notification} from '../../store/notification/reducer';

interface Props {
    notifications?: Array<Notification>
}

@(connect((state: StoreTypes) => ({
    notifications: notificationSelector(state)
})) as any)
export class NotificationRoot extends Component<Props> {
    render () {
        return (
            <div className={classNames('notification-root')}>

            </div>
        )
    }
}