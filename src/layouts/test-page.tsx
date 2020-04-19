import React from "react";
import { createTooltipHOC, Input } from "../elements";
import { FilterComponent } from "../modules";

const InputWithTooltip = createTooltipHOC(Input.Password);

export const TestView = () => (
    <div style={{ width: '900px', padding: '20px' }}>
        <FilterComponent />
        <InputWithTooltip />
    </div>
);
