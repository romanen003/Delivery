import React from "react";
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { RestaurantBox, Props } from './restaurant-box';
import { StoreTypes } from "../../store/store-types";
import { RouterPathSelector } from "../../store/router/selector";

export const RestaurantBoxWithRouting = connect((state: StoreTypes) => ({
    path: RouterPathSelector(state)
}), { push })((props: Props & {push: (value: string) => any, path: string}) => {
    const handleClick = () => props.push(`restaurant=${props.nameEn}`);

    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <RestaurantBox {...props}/>
        </div>
    )
});
