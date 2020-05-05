import React, { Component, RefObject, FocusEvent } from "react";
import classNames from 'classnames/bind';
import { Button, Text } from "..";
import style from './style.scss';

const cn = classNames.bind(style);

export type SelectValue = {
    id: number,
    value: string
};
type Props = {
    value: SelectValue,
    options: Array<SelectValue>,
    onSelectChange: (value: SelectValue, name?: string) => void,
    name?: string
}
type State = {
    opened: boolean
}

export const EMPTY_ITEM: SelectValue = { id: 0, value: '' };


export class Select extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            opened: false
        };
    }

    IconRef: RefObject<HTMLButtonElement> = React.createRef();
    inputRef: RefObject<HTMLInputElement> = React.createRef();
    ListRef: RefObject<HTMLUListElement> = React.createRef();
    itemsRefs: Array<RefObject<HTMLButtonElement>> = [];

    getButtonRef = (ref: HTMLButtonElement): void  => {
        if (ref){
            this.itemsRefs.push(({ current: ref }))
        }
    }

    handleSelectBlur = (event: FocusEvent): void => {
        const { relatedTarget } = event;
        const refs = [ this.inputRef, this.IconRef, this.ListRef, ...this.itemsRefs ];

        if (!(refs.find(item => item.current === relatedTarget)) && this.state.opened){
            this.setState(() => ({ opened: false }))
            this.itemsRefs = [];
        }
    };

    handleIconClick = (): void => this.setState(({ opened }) => ({ opened: !opened }));

    handleItemClick = (selectedValue: SelectValue): void => {
        const { onSelectChange, name } = this.props;

        this.setState({ opened: false });
        onSelectChange(selectedValue, name);
        this.itemsRefs = [];
    };

    render() {
        const { options = [], value: selectedValue } = this.props;
        const { opened } = this.state;

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
                    <ul className={cn('select__dropdown')} tabIndex={1} ref={this.ListRef}>
                        {options. length ? (
                            options.map(({ value, id }: SelectValue) => (
                                <li
                                    key={`${id}-select`}
                                >
                                    <button
                                        ref={this.getButtonRef}
                                        className={cn('select__item', {
                                            'select__item_selected' : selectedValue.id === id
                                        })}
                                        onClick={() => this.handleItemClick({ value, id })}
                                    >
                                        {value}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className={cn('select__empty')}>
                                <Text black>empty</Text>
                            </li>
                        )}
                    </ul>
                }
            </div>
        )
    }
}
