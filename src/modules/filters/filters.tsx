import React from "react";
import {Grid, Input, Text} from "../../elements";

const {Row, Col,Col_Width, T_Align} = Grid;

export const FilterComponent = () => {
    return (
        <Grid>
            <Row>
                <Col textAlign={T_Align.LEFT}>
                    <Text sub black>City</Text>
                    <Input/>
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Type food</Text>
                    <Input/>
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Stars</Text>
                    <Input/>
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Price</Text>
                    <Input/>
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Time to delivery</Text>
                    <Input/>
                </Col>
            </Row>
        </Grid>
    )
};
