import React, {ReactElement} from "react";
import {Grid} from "../..";

const {Row, Col, Col_Width} = Grid;

interface Props {
    headerView?: ReactElement,
    contentView?: ReactElement,
    footerView?: ReactElement,
    SidebarView?: ReactElement
}

export const LayoutWithSidebar = ({
    headerView,
    contentView,
    footerView,
    SidebarView
}: Props ) => (
    <Grid>
        <Row>
            <Col>{headerView}</Col>
        </Row>
        <Row>
            <Col col={Col_Width.THIRTY}>{SidebarView}</Col>
            <Col col={Col_Width.SEVENTY}>{contentView}</Col>
        </Row>
        <Row>
            <Col>{footerView}</Col>
        </Row>
    </Grid>
);
