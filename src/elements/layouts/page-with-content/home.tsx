import React, {ReactElement} from "react";
import classNames from 'classnames';
import './home.scss';

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
        <header className={classNames('page-header')}>
            {headerView}
        </header>
        <main className={classNames('page-content')}>
            {contentView}
        </main>
        <footer className={classNames('page-footer')}>
            {footerView}
        </footer>
    </div>
);
