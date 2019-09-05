import React from "react";
import {LayoutHome} from "../elements";
import {Header, RestaurantContainer} from "../modules";


export const Home = () => (
    <LayoutHome
        headerView={<Header/>}
        contentView={<RestaurantContainer/>}
    />
);
