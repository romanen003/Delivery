import React from "react";
import {LayoutHome, createTooltipHOC, Input} from "../elements";
import {Header,RestaurantBox} from "../modules";

const InputWithTooltip = createTooltipHOC(Input.Password);

const TestView = () => (
    <div style={{width: '1000px', padding: '20px'}}>
        <RestaurantBox
            name={'KFC'}
            src={'static/img/kfc.jpg'}
            rating={'4.5'}
            delivery={' от 300 Р'}
            category={'бургеры'}
            deliveryTime={'15-30 мин'}
        />
        <InputWithTooltip/>
    </div>
);

export const TestPage = () => (
    <LayoutHome
        headerView={<Header/>}
        contentView={<TestView/>}
    />
);
