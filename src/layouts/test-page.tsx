import React from "react";
import {LayoutHome, createTooltipHOC, Input, Select} from "../elements";
import {Header, FilterComponent} from "../modules";

const InputWithTooltip = createTooltipHOC(Input.Password);

const options = [{
    id: '1', value: 'value1'
}, {
    id: '2', value: 'value2'
}, {
    id: '3', value: 'value3'
}, {
    id: '4', value: 'value4'
}];

const TestView = () => (
    <div style={{width: '200px', padding: '20px'}}>
        <Select options={options} />
        {/*<FilterComponent />*/}
    </div>
);

export const TestPage = () => (
    <LayoutHome
        headerView={<Header/>}
        contentView={<TestView/>}
    />
);
