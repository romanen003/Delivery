import React, {ReactElement} from "react";
import classNames from 'classnames';

interface Props {
    headerView?: ReactElement,
    contentView?: ReactElement,
    footerView?: ReactElement
}

export const LayoutHome = ({
   headerView,
   contentView,
   footerView
}: Props ) => (
    <div className={classNames('page')}>
        <div className={classNames('page-header')}>
            {headerView}
        </div>
        <div className={classNames('page-content')}>
            {contentView}
        </div>
        <div className={classNames('page-footer')}>
            {footerView}
        </div>
    </div>
);
