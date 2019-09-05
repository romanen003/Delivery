import React from "react";
import {LayoutHome, createTooltipHOC, Input} from "../elements";
import {Header, RestaurantContainer} from "../modules";

const InputWithTooltip = createTooltipHOC(Input.Password);

const TestView = () => (
    <div style={{width: '1000px', padding: '20px'}}>
        <InputWithTooltip/>
        <RestaurantContainer/>
    </div>
);

export const TestPage = () => (
    <LayoutHome
        headerView={<Header/>}
        contentView={<TestView/>}
    />
);
