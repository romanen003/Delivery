import React, { Component } from 'react';
import classNames from 'classnames';
import { Tooltip } from "./tooltip";
import { Text } from "..";
import style from './tooltip.scss';

const cn = classNames.bind(style);

interface Props {}

interface State {
    show: boolean
}

export const createTooltipHOC = (wrappedComponent: any) => {
    class ComponentWithTooltip extends Component<Props, State> {
        state = {
            show: false
        };

        handleMouseEnter = (event: any) => {
            console.log('event', event.target.getBoundingClientRect());
            this.setState({ show: true })
        };

        handleMouseLeave = () => this.setState({ show: false });

        render() {
            const NextComponent = wrappedComponent;

            return (
                <div className={cn('component-with-tooltip')}>
                    <NextComponent {...this.props}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                    {this.state.show && <Tooltip text={'fdsfdsf'}/>}
                </div>
            )
        }
    }

    return ComponentWithTooltip;
};

export const TextWithTooltip = createTooltipHOC(Text);
