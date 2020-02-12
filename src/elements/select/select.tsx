import React, { useState } from "react";
import classNames from "classnames";
import { ICON } from "../buttons/button-icon";
import './style.scss';

const EMPTY_ITEM = {id: '0', value: ''};

interface Props {
    value?: {id: string, value: string},
    options?: Array<{id: string, value: string}>,
    withEmptyItem?: boolean
}

export const Select = ({
    options = [],
    value = EMPTY_ITEM,
    withEmptyItem = false
}: Props) => {
    let option = options && options.length ? options : [EMPTY_ITEM];
    if (withEmptyItem && options && options.length) {
        option = [EMPTY_ITEM, ...option];
    }

    const [{
        selectedValue,
        showDropdown
    }, setState] = useState({
        selectedValue: value,
        showDropdown: false
    });

    const handleIconClick = (): void => setState(
        (state) => ({...state, showDropdown: !showDropdown})
    );
    const handleItemClick = (selectedValue: {id: string, value: string}): void => {
        setState(() => ({
            selectedValue: selectedValue,
            showDropdown: false
        }))
    };
    const handleSelectBlur = (): void => {
        if (showDropdown) {
            setState((state) => ({
                ...state,
                showDropdown: false
            }))
        }
    };

    return (
        <div className={classNames('select')} onMouseLeave={handleSelectBlur}>
            <div className={classNames('select__value')}>{selectedValue.value}</div>
            <div className={classNames('select__icon')} onClick={handleIconClick}>
                <img src={ICON.LIST} alt={ICON.LIST} />
            </div>
            {showDropdown &&
                <div className={classNames('select__dropdown')}>
                    {showDropdown &&
                        option.map(({value, id}) => (
                            <div
                                className={classNames('select__item', {
                                    'select__item_selected' : selectedValue.id === id
                                })}
                                key={`${id}-select`}
                                onClick={() => handleItemClick({value, id})}
                            >
                                {value}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
};
