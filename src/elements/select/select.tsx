import React, {Component, RefObject, FocusEvent } from "react";
import classNames from "classnames";
import { ICON } from "../buttons/button-icon";
import './style.scss';

export const EMPTY_ITEM: Value = {id: '0', value: ''};

type Value = {
    id: string,
    value: string
};

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
        options: [EMPTY_ITEM],
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
    handleIconClick = () => this.setState(
        ({opened}) => ({ opened: !opened})
    );

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
            <div className={classNames('select')}>
                <input
                    className={classNames('select__value')}
                    readOnly
                    value={selectedValue.value}
                    onClick={this.handleIconClick}
                    onBlur={this.handleSelectBlur}
                    ref={this.inputRef}
                />
                <button
                    className={classNames('select__icon')}
                    onClick={this.handleIconClick}
                    onBlur={this.handleSelectBlur}
                    ref={this.IconRef}
                >
                    <img src={ICON.LIST} alt={ICON.LIST} />
                </button>
                {opened &&
                <ul className={classNames('select__dropdown')} tabIndex={1}>
                    {opened &&
                    options.map(({value, id}) => (
                        <li
                            key={`${id}-select`}
                            onClick={() => this.handleItemClick({value, id})}
                        >
                            <button
                                className={classNames('select__item', {
                                    'select__item_selected' : selectedValue.id === id
                                })}
                            >{value}</button>
                        </li>
                    ))
                    }
                </ul>
                }
            </div>
        )
    }
}
