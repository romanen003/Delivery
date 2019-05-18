import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {Notification} from '../../elements';
import {StoreTypes} from "../../store/store-types";
import {notificationSelector} from '../../store/notification/selectors';
import {NotificationType} from '../../store/notification/reducer';
import './notification-root.scss';

interface Props {
    notifications?: Array<NotificationType>
}

@(connect((state: StoreTypes) => ({
    notifications: notificationSelector(state)
})) as any)
export class NotificationRoot extends Component<Props> {
    render () {
        const {notifications = []} = this.props;
        console.log(this.props.notifications);
        return (
            <div className={classNames('notification-root')}>
                {notifications.map(({type, description, title, lifeTime}, index) => (
                    <div className={classNames('notification-root__item-wrapper')} key={index}>
                        <Notification
                            key={index}
                            type={type}
                            description={description}
                            title={title}
                            lifeTime={lifeTime}
                        />
                    </div>
                ))}
            </div>
        )
    }
}