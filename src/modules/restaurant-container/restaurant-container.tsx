import React, { Component } from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { Grid, Text } from '../../elements';
import { StoreTypes } from "../../store/store-types";
import { RestaurantBoxWithRouting } from '../restaurant-box/restaurant-box-routing';
import { FilterComponent } from "..";
import { RestaurantDataSelector } from "../../store/restaurant/selectors";
import style from './restaurant-container.scss';
import { getRestaurantsActionSaga } from '../../store/restaurant/action';

const cn = classNames.bind(style);
const { Row, Col, Margin_Top, Col_Width, T_Align, Position } = Grid;

interface Data {[key: string]: any}
interface Props {
    getRestaurantData: () => void,
    data: Array<Data>,
    history: {
        push: (arg: string) => void
    }
}

class RestaurantContainerComponent extends Component<Props> {
    componentDidMount(): void {
        this.props.getRestaurantData();
    }

    render(){
        return (
            <div className={cn('restaurant-container')}>
                <FilterComponent />
                <Grid>
                    <Row marginTop={Margin_Top.X16}>
                        <Col textAlign={T_Align.LEFT}>
                            <Text black heading> Рестораны :</Text>
                        </Col>
                    </Row>
                    <Row marginTop={Margin_Top.X16} position={Position.CENTER}>
                        {this.props.data.map(({
                            nameRu,
                            rating,
                            id,
                            coverImg,
                            category,
                            logoImg,
                            nameEn
                        }) =>
                            <Col col={Col_Width.QUARTER} marginT={Margin_Top.X16} key={id}>
                                <RestaurantBoxWithRouting
                                    name={nameRu}
                                    coverImg={coverImg}
                                    logoImg={logoImg}
                                    rating={rating}
                                    delivery={'от 300р'}
                                    category={category}
                                    deliveryTime={'30'}
                                    key={id}
                                    nameEn={nameEn}
                                    history={this.props.history}
                                />
                            </Col>)}
                    </Row>
                </Grid>
            </div>
        )
    }
}


export const RestaurantContainer = connect((state: StoreTypes) => ({
    data: RestaurantDataSelector(state)
}), {
    getRestaurantData: getRestaurantsActionSaga
})(RestaurantContainerComponent);
