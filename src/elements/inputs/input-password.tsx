import React from 'react';
import {InputWithClearProps} from './input-with-clear/input-with-clear';
import {Input} from "./input";

const PASSWORD = 'PASSWORD';

export const InputPassword = (props: InputWithClearProps) => (
    <Input.Clear
        {...props}
        type={PASSWORD}
    />
);