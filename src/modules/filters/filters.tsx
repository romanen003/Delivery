import React from "react";
import {Grid, Select, Text} from "../../elements";

const {Row, Col,Col_Width, T_Align} = Grid;

const options = [{
    id: '1', value: 'value1'
}, {
    id: '2', value: 'value2'
}, {
    id: '3', value: 'value3'
}, {
    id: '4', value: 'value4'
}];

export const FilterComponent = () => {
    return (
        <Grid>
            <Row>
                <Col textAlign={T_Align.LEFT}>
                    <Text sub black>City</Text>
                    <Select options={options} />
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Type food</Text>
                    <Select options={options} />
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Stars</Text>
                    <Select options={options} />
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Price</Text>
                    <Select options={options} />
                </Col>
                <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                    <Text sub black>Time to delivery</Text>
                    <Select options={options} />
                </Col>
            </Row>
        </Grid>
    )
};
