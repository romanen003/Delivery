import React from "react";
import {LayoutHome, createTooltipHOC, Input} from "../elements";
import {Header} from "../modules";

const InputWithTooltip = createTooltipHOC(Input.Password);

export const TestPage = () => (
    <LayoutHome
        headerView={<Header/>}
        contentView={<InputWithTooltip/>}
    />
);
