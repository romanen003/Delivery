import React, { ReactElement } from "react";
import classNames from 'classnames/bind';
import style from './home.scss';

const cn = classNames.bind(style);

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
    <div className={cn('page')}>
        <header className={cn('page_header')}>
            {headerView}
        </header>
        <main className={cn('page_content')}>
            {contentView}
        </main>
        <footer className={cn('page_footer')}>
            {footerView}
        </footer>
    </div>
);
