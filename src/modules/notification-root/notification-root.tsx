import React, { Component } from 'react';
import { connect } from "react-redux";
import classNames from "classnames/bind";
import { Notification } from '../../elements';
import { StoreTypes } from "../../store/store-types";
import { notificationSelector } from '../../store/notification/selectors';
import { NotificationType } from '../../store/notification/reducer';
import { deleteNotification } from '../../store';
import style from './notification-root.scss';

const cn = classNames.bind(style);

interface Props {
    notifications?: Array<NotificationType>,
    deleteNotification?: (id: number) => void
}

class NotificationRootContainer extends Component<Props> {
    handleCloseNotification = (id: number) => {
        const {
            deleteNotification = () => {}
        } = this.props;

        deleteNotification(id)
    };

    render () {
        const { notifications = [] } = this.props;

        return (
            <div className={cn('notification-root')}>
                {notifications.map(({ type, description, title, lifeTime, id }) => (
                    <div className={cn('notification-root__item-wrapper')} key={id}>
                        <Notification
                            type={type}
                            description={description}
                            title={title}
                            lifeTime={lifeTime}
                            id={id}
                            onClose={this.handleCloseNotification}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export const NotificationRoot = connect((state: StoreTypes) => ({
    notifications: notificationSelector(state)
}), {
    deleteNotification
})(NotificationRootContainer);
