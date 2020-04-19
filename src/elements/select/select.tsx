import React, { Component, RefObject, FocusEvent } from "react";
import classNames from 'classnames/bind';
import { Button } from "..";
import style from './style.scss';

const cn = classNames.bind(style);

type Value = {
    id: string,
    value: string
};

export const EMPTY_ITEM: Value = { id: '0', value: '' };


interface Props {
    value?: Value,
    options?: Array<Value>,
    withEmptyItem?: boolean
}
type State = {
    selectedValue: Value,
    opened: boolean
}

export class Select extends Component<Props, State> {
    static defaultProps = {
        options: [ EMPTY_ITEM ],
        value: EMPTY_ITEM,
        withEmptyItem: false
    };
    IconRef: RefObject<HTMLButtonElement>;
    inputRef: RefObject<HTMLInputElement>;

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedValue: props.value || EMPTY_ITEM,
            opened: false
        };
        this.IconRef = React.createRef();
        this.inputRef = React.createRef();
    }

    handleSelectBlur = (event: FocusEvent): void => {
        const { relatedTarget } = event;

        if (
            !(relatedTarget === this.inputRef.current || relatedTarget === this.IconRef.current)
            && this.state.opened
        ){
            this.setState(() => ({ opened: false }))
        }
    };
    handleIconClick = (): void => this.setState(({ opened }) => ({ opened: !opened }));

    handleItemClick = (selectedValue: Value): void => {
        this.setState(() => ({
            selectedValue: selectedValue,
            opened: false
        }))
    };

    render() {
        const { options = [] } = this.props;
        const { opened, selectedValue } = this.state;

        return (
            <div className={cn('select')}>
                <input
                    className={cn('select__value')}
                    readOnly
                    value={selectedValue.value}
                    onClick={this.handleIconClick}
                    onBlur={this.handleSelectBlur}
                    ref={this.inputRef}
                />
                <div
                    className={cn('select__icon')}

                >
                    <Button.List
                        onClick={this.handleIconClick}
                        onBlur={this.handleSelectBlur}
                        buttonRef={this.IconRef}
                    />
                </div>
                {opened &&
                <ul className={cn('select__dropdown')} tabIndex={1}>
                    {opened &&
                    options.map(({ value, id }) => (
                        <li
                            key={`${id}-select`}
                            onClick={() => this.handleItemClick({ value, id })}
                        >
                            <button
                                className={cn('select__item', {
                                    'select__item_selected' : selectedValue.id === id
                                })}
                            >
                                {value}
                            </button>
                        </li>
                    ))
                    }
                </ul>
                }
            </div>
        )
    }
}
