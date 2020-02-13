import React from "react";
import {LayoutHome, createTooltipHOC, Input} from "../elements";
import {Header, FilterComponent} from "../modules";

const InputWithTooltip = createTooltipHOC(Input.Password);

const TestView = () => (
    <div style={{width: '900px', padding: '20px'}}>
        <FilterComponent />
        <InputWithTooltip />
    </div>
);

export const TestPage = () => (
    <LayoutHome
        headerView={<Header/>}
        contentView={<TestView/>}
    />
);
