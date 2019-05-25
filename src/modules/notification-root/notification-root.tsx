import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {TransitionGroup} from 'react-transition-group'
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

@(connect((state: StoreTypes) => ({
    notifications: notificationSelector(state)
}), {
    deleteNotification
}) as any)
export class NotificationRoot extends Component<Props> {
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
                    <TransitionGroup
                        transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={true} transitionLeave={true}
                    >
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
                    </TransitionGroup>
                ))}
            </div>
        )
    }
}
