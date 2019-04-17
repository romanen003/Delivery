import React from 'react';
import {Button} from './button';
import edit from './svg/edit.svg';
import confirm from './svg/confirm.svg';
import close from './svg/close.svg';
import delet from './svg/delete.svg';
import transfer from './svg/transfer.svg';
import add from './svg/add.svg';
import clear from './svg/clear.svg';
import list from './svg/list.svg';
import top from './svg/top.svg';
import {ButtonProps} from './button';

const  createButtonIcon = (typeIcon: string) => (props: ButtonProps) =>
    <Button {...props} icon>
        <img src={typeIcon} alt={typeIcon} />
    </Button>
;

const ICON = {
    EDIT: edit,
    CONFIRM: confirm,
    CLOSE: close,
    DELETE: delet,
    TRANSFER: transfer,
    ADD: add,
    CLEAR: clear,
    LIST: list,
    TOP: top
};

export const BUTTONS_WITH_ICONS = {
    EDIT: createButtonIcon(ICON.EDIT),
    CONFIRM: createButtonIcon(ICON.CONFIRM),
    CLOSE: createButtonIcon(ICON.CLOSE),
    DELETE: createButtonIcon(ICON.DELETE),
    ADD: createButtonIcon(ICON.ADD),
    TRANSFER: createButtonIcon(ICON.TRANSFER),
    CLEAR: createButtonIcon(ICON.CLEAR),
    LIST: createButtonIcon(ICON.LIST),
    TOP: createButtonIcon(ICON.TOP)
};
