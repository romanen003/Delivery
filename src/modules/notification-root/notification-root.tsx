import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {Notification} from '../../elements';
import {StoreTypes} from "../../store/store-types";
import {notificationSelector} from '../../store/notification/selectors';
import {NotificationType} from '../../store/notification/reducer';
import {deleteNotification} from '../../store';
import './notification-root.scss';

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
        const {notifications = []} = this.props;

        return (
            <div className={classNames('notification-root')}>
                {notifications.map(({type, description, title, lifeTime, id}, index) => (
                    <div className={classNames('notification-root__item-wrapper')} key={index}>
                        <Notification
                            key={index}
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
