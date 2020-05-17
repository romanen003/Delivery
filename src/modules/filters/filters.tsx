import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Select, Text } from "../../elements";
import { EMPTY_ITEM, SelectValue } from "../../elements/select/select";

const { Row, Col,Col_Width, T_Align, Margin_Top, Position } = Grid;

const options = [ {
    id: 1, value: 'value1'
}, {
    id: 2, value: 'value2'
}, {
    id: 3, value: 'value3'
}, {
    id: 4, value: 'value4'
} ];


export class FilterComponent extends Component {
    state = {
        typeFood: EMPTY_ITEM,
        stars: EMPTY_ITEM,
        time: EMPTY_ITEM
    };

    handleSelectChange = (value: SelectValue, name: string): void => {
        this.setState({ [name]: value })
    };

    render () {
        const {
            typeFood,
            stars,
            time
        } = this.state;

        return (
            <Grid>
                <Row  marginTop={Margin_Top.X16} position={Position.CENTER}>
                    <Col col={Col_Width.THIRTY} textAlign={T_Align.LEFT}>
                        <Text sub black>Type food</Text>
                        <Select
                            options={options}
                            value={typeFood}
                            name='typeFood'
                            onSelectChange={this.handleSelectChange}
                        />
                    </Col>
                    <Col col={Col_Width.THIRTY} textAlign={T_Align.LEFT}>
                        <Text sub black>Stars</Text>
                        <Select
                            options={options}
                            value={stars}
                            name='stars'
                            onSelectChange={this.handleSelectChange}
                        />
                    </Col>
                    <Col col={Col_Width.THIRTY} textAlign={T_Align.LEFT}>
                        <Text sub black>Time to delivery</Text>
                        <Select
                            options={[]}
                            value={time}
                            name={'time'}
                            onSelectChange={this.handleSelectChange}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export const ConnectedFilterComponent = connect()(FilterComponent);
