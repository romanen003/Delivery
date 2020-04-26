import React from "react";
import { RestaurantBox, Props } from './restaurant-box';

interface CustomProps {
    history: {
        push: (arg: string) => void
    }
}


export const RestaurantBoxWithRouting = (props: Props & CustomProps) => {
    const { push } = props.history;
    const handleClick = () => push && push(`restaurant=${props.nameEn}`);

    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <RestaurantBox {...props}/>
        </div>
    )
};
