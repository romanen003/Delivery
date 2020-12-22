import React, { memo, useCallback } from 'react';
import { RestaurantBox, Props } from './restaurant-box';
import { History } from 'history';

interface CustomProps {
    history: History
}

export const RestaurantBoxWithRouting = memo((props: Props & CustomProps) => {
    const handleClick = useCallback(() => {
        props.history.push(`restaurant=${props.nameEn}`);
    }, [ props.history.push ]);

    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <RestaurantBox {...props}/>
        </div>
    )
});
