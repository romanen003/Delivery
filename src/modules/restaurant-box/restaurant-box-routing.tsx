import React from "react";
import { connect } from "react-redux";
import { RestaurantBox, Props } from './restaurant-box';

export const RestaurantBoxWithRouting = connect()((props: Props & {push?: (value: string) => any, path: string}) => {
    const handleClick = () => props.push && props.push(`restaurant=${props.nameEn}`);

    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <RestaurantBox {...props}/>
        </div>
    )
});
